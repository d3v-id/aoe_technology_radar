import React from "react";

type SkillDotsProps = {
  name: string;
  level: number; // z. B. 0 bis 5
  max?: number; // Standard: 5 Punkte
  color?: string; // z. B. "bg-indigo-500"
};

const SkillDots: React.FC<SkillDotsProps> = ({
  name,
  level,
  max = 5,
  color = "bg-indigo-500",
}) => {
  const dots = Array.from({ length: max }, (_, i) => (
    <div
      key={i}
      className={`w-4 h-4 rounded-full ${i < level ? color : `border ${color.replace("bg-", "border-")}`}`}
    />
  ));

  return (
    <div className="mb-4">
      <div className="text-sm font-medium mb-1">{name}</div>
      <div className="flex gap-2">{dots}</div>
    </div>
  );
};

export default SkillDots;
