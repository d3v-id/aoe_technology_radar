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
  private readonly minDistance: number = 25;
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

  private getXYPosition(
    quadrantId: string,
    ringId: string,
    radiusFraction: number,
    angleFraction: number,
  ): Position {
    const [innerRadius, outerRadius] = this.ringDimensions[ringId];
    const ringWidth = (outerRadius - innerRadius) * 0.1;
    const absoluteRadius =
      innerRadius +
      ringWidth / 2 +
      halfBlipSize +
      radiusFraction * ringWidth * 1; // 0.01  Center in the middle of the two rings
    //const absoluteRadius = (innerRadius + outerRadius) / 2 + this.paddingRing / 2;

    const startAngle = this.quadrantAngles[quadrantId] + this.paddingAngle;
    const endAngle = startAngle + 90 - 2 * this.paddingAngle;

    //const adjustedAngleFraction = 0.25 + 0.5 * angleFraction;
    //const absoluteAngle =  startAngle + (endAngle - startAngle) * adjustedAngleFraction;

    const absoluteAngle = startAngle + (endAngle - startAngle) * angleFraction;

    const angleInRadians = ((absoluteAngle - 90) * Math.PI) / 180;
    console.log("----------------------");
    console.log(startAngle);
    console.log(endAngle);
    console.log(absoluteAngle);
    console.log(angleInRadians);
    console.log("----------------------");

    return [
      Math.round(this.centerRadius + absoluteRadius * Math.cos(angleInRadians)),
      Math.round(this.centerRadius + absoluteRadius * Math.sin(angleInRadians)),
    ];
  }

  public getNextPosition(quadrantId: string, ringId: string): Position {
    this.positions[quadrantId] ??= [];

    let tries = 0;
    let position: Position;

    do {
      position = this.getXYPosition(
        quadrantId,
        ringId,
        Math.sqrt(Math.random()),
        Math.random(),
      );

      tries++;
    } while (
      this.isOverlapping(position, this.positions[quadrantId]) &&
      tries < 150
    );

    if (tries >= 150) {
      console.warn(
        `Could not find a non-overlapping position for ${quadrantId} in ring ${ringId}`,
      );
    }

    console.log("Position: ", position[0], position[1]);

    this.positions[quadrantId].push(position);
    return position;
  }
}
