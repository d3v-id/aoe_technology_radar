import { getChartConfig } from "@/lib/data";
import { Quadrant, Ring } from "@/lib/types";

type Position = [x: number, y: number];
type RingDimension = [innerRadius: number, outerRadius: number];

// Corresponding to positions 1, 2, 3, and 4 respectively
const startAngles = [270, 0, 180, 90];

const { blipSize } = getChartConfig();
const halfBlipSize = blipSize / 2;

export default class Positioner {
  private readonly centerRadius: number;
  private readonly minDistance: number = 20;
  private readonly paddingRing: number = 10;
  private readonly paddingAngle: number = 5;
  private positions: Record<string, Position[]> = {};
  private ringDimensions: Record<string, RingDimension> = {};
  private quadrantAngles: Record<string, number> = {};

  constructor(size: number, quadrants: Quadrant[], rings: Ring[]) {
    this.centerRadius = size / 2;

    quadrants.forEach((quadrant) => {
      this.quadrantAngles[quadrant.id] = startAngles[quadrant.position - 1];
    });

    rings.forEach((ring, index) => {
      const innerRadius =
        (rings[index - 1]?.radius ?? 0) * this.centerRadius + this.paddingRing;
      const outerRadius =
        (ring.radius ?? 1) * this.centerRadius - this.paddingRing;
      this.ringDimensions[ring.id] = [innerRadius, outerRadius];
    });
  }

  static getDistance(a: Position, b: Position): number {
    const [x1, y1] = a;
    const [x2, y2] = b;
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }

  private isOverlapping(position: Position, positions: Position[]): boolean {
    return positions.some(
      (p) => Positioner.getDistance(position, p) < this.minDistance,
    );
  }

  private positionCounters: Record<string, number> = {}; // key: `${quadrantId}-${ringId}`
  private totalBlipsMap: Record<string, number> = {}; // key: `${quadrantId}-${ringId}`

  public getNextPosition(
    quadrantId: string,
    ringId: string,
    totalBlips?: number,
  ): Position {
    // Initialize positions if not already done
    this.positions[quadrantId] ??= [];

    const key = `${quadrantId}-${ringId}`;

    // Save total blips on first call
    if (this.totalBlipsMap[key] === undefined && totalBlips !== undefined) {
      this.totalBlipsMap[key] = totalBlips;
    }

    const blipsInRing = this.totalBlipsMap[key] ?? 12; // Default to 12 if not set
    const count = this.positionCounters[key] ?? 0;

    // Calculate the number of rows and columns for even distribution
    const rows = 2; // Space blips radially (rows)
    const cols = Math.ceil(blipsInRing / rows); // Space blips angularly (columns)

    console.log(
      `Quadrant: ${quadrantId}, Ring: ${ringId}, Count: ${count}, Rows: ${rows}, Cols: ${cols}`,
    );

    const row = Math.floor(count / cols) * 2; // Row index (radial placement)
    const col = count % cols; // Column index (angular placement)

    // Apply more control to distribute blips evenly both radially and angularly
    const rowSpacing = 1 / (rows + 2); // Spread rows evenly (inner to outer)
    const radiusFraction = (row + 1) * rowSpacing; // Radial position between the rings

    // Ensure radiusFraction does not exceed 1 (outer edge)
    const safeRadiusFraction = Math.min(radiusFraction, 1);

    console.log(
      `Row: ${row}, Col: ${col}, Radius Fraction: ${safeRadiusFraction}`,
    );

    // Angular spread: ensure blips are evenly distributed across the full 90° angle
    const angleFraction = (col + 0.5) / cols; // Distribute blips evenly across the angle

    // Calculate absolute radius
    const [innerRadius, outerRadius] = this.ringDimensions[ringId];
    const ringWidth = outerRadius - innerRadius;
    const absoluteRadius = innerRadius + safeRadiusFraction * ringWidth;

    // Calculate angle in radians
    const startAngle = this.quadrantAngles[quadrantId] + this.paddingAngle;
    const endAngle = startAngle + 90 - 2 * this.paddingAngle;
    const absoluteAngle = startAngle + (endAngle - startAngle) * angleFraction;
    const angleInRadians = ((absoluteAngle - 90) * Math.PI) / 180;

    // Calculate position based on angle and radius
    const position: Position = [
      Math.round(this.centerRadius + absoluteRadius * Math.cos(angleInRadians)),
      Math.round(this.centerRadius + absoluteRadius * Math.sin(angleInRadians)),
    ];

    // Ensure no overlap, then add the position
    if (!this.isOverlapping(position, this.positions[quadrantId])) {
      this.positions[quadrantId].push(position);
      this.positionCounters[key] = count + 1;
      return position;
    } else {
      console.warn(`Overlap detected for ${quadrantId}-${ringId}, skipping`);
      return position; // Still return a position even if overlap is detected
    }
  }
}
