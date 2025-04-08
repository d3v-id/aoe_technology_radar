// ConnectingLines.tsx
import React, { FC } from "react";

import styles from "./ConnectingLines.module.css";

import { Item } from "@/lib/types";

interface ConnectingLinesProps {
  items: Item[];
  hoveredItemId: string | null;
  show: boolean;
  className?: string;
}

const renderHoverLines = (items: Item[], hoveredItemId: string) => {
  const hoveredItem = items.find((i) => i.id === hoveredItemId);
  if (!hoveredItem) return null;

  const [x1, y1] = hoveredItem.position;

  return items
    .filter((i) => i.id !== hoveredItemId)
    .map((otherItem) => {
      const [x2, y2] = otherItem.position;
      return (
        <line
          key={`line-${hoveredItemId}-${otherItem.id}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(0,0,0,0.2)"
          strokeWidth={1}
          className={styles.line}
        />
      );
    });
};

export const ConnectingLines: FC<ConnectingLinesProps> = ({
  items,
  hoveredItemId,
  show,
  className,
}) => {
  if (!show || !hoveredItemId) return null;

  return (
    <svg
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {renderHoverLines(items, hoveredItemId)}
    </svg>
  );
};
