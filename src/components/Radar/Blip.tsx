import React, { useEffect } from "react";

import { getChartConfig } from "@/lib/data";
import { Flag } from "@/lib/types";

const { blipSize } = getChartConfig();
const halfBlipSize = blipSize / 2;

interface BlipProps {
  icon: string | undefined;
  color: string;
  x: number;
  y: number;
}

export function Blip({ icon, flag, color, x, y }: BlipProps & { flag: Flag }) {
  if (icon != undefined) {
    return <BlipIcon icon={icon} x={x} y={y} color={color} />;
  }

  console.log("1");
  console.log(icon);

  switch (flag) {
    case Flag.New:
      return <BlipNew icon={icon} x={x} y={y} color={color} />;
    case Flag.Changed:
      return <BlipChanged icon={icon} x={x} y={y} color={color} />;
    default:
      return <BlipDefault icon={icon} x={x} y={y} color={color} />;
  }
}

/*function BlipIcon({ icon, x, y, color }: BlipProps) {
  x = Math.round(x - halfBlipSize);
  y = Math.round(y - halfBlipSize);

  // Dynamically load the SVG based on the flag
 /* const iconSrc = `../../../blipIcons/${icon}.svg`;

  console.log(iconSrc);

  return (
    <g transform={`translate(${x},${y})`}>
      <image href={iconSrc} width="24" height="24" />
    </g>
  );*
  return (
    <path
      stroke="none"
      fill={color}
      d="M24.16,11 L37.194,15.648 L35.206,32.882 L24.16,39 L13.114,32.882 L11.126,15.648 L24.16,11 Z M24.16,14.094 L16.012,32.364 L19.05,32.364 L20.688,28.276 L27.604,28.276 L29.242,32.364 L32.28,32.364 L24.16,14.094 Z M24.16,20.03 L26.54,25.756 L21.78,25.756 L24.16,20.03 Z"
      transform={`translate(${x},${y})`}
    />
  );
*

  let iconSrc;
  try {
    iconSrc = require(`../../../blipIcons/${icon}.svg`);
  } catch (error) {
    console.error("Icon not found:", icon);
    return null;
  }

  x = Math.round(x - halfBlipSize);
  y = Math.round(y - halfBlipSize);

  return (
    <g transform={`translate(${x},${y})`}>
      <image href={iconSrc} width="24" height="24" />
    </g>
  );
}*/

function BlipIcon({ icon, x, y, color }: BlipProps) {
  const iconSrc = `/blipIcons/${icon}.svg`;

  x = Math.round(x - halfBlipSize);
  y = Math.round(y - halfBlipSize);

  return (
    <g transform={`translate(${x},${y})`}>
      <image href={iconSrc} width="50" height="50" />
    </g>
  );
}

function BlipNew({ x, y, color }: BlipProps) {
  x = Math.round(x - halfBlipSize);
  y = Math.round(y - halfBlipSize);
  return (
    <path
      stroke="none"
      fill={color}
      d="M5.7679491924311 2.1387840678323a2 2 0 0 1 3.4641016151378 0l5.0358983848622 8.7224318643355a2 2 0 0 1 -1.7320508075689 3l-10.071796769724 0a2 2 0 0 1 -1.7320508075689 -3"
      transform={`translate(${x},${y})`}
    />
  );
}

function BlipChanged({ x, y, color }: BlipProps) {
  x = Math.round(x - halfBlipSize);
  y = Math.round(y - halfBlipSize);
  return (
    <rect
      transform={`rotate(-45 ${x} ${y})`}
      x={x}
      y={y}
      width={blipSize}
      height={blipSize}
      rx="3"
      stroke="none"
      fill={color}
    />
  );
}

function BlipDefault({ x, y, color }: BlipProps) {
  return <circle cx={x} cy={y} r={halfBlipSize} stroke="none" fill={color} />;
}
function useState<T>(arg0: null): [any, any] {
  throw new Error("Function not implemented.");
}
