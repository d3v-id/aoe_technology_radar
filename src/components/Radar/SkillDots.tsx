import React from "react";

type SkillDotsProps = {
  name: string;
  level: number; // from 0 to 5
  max?: number; // Default: 5 dots
  color?: string; // Default: "blue"
};

const SkillDots: React.FC<SkillDotsProps> = ({
  name,
  level,
  max = 5,
  color = "blue",
}) => {
  const dots = Array.from({ length: max }, (_, i) => (
    <div
      key={i}
      className={`dot ${i < level ? "filled" : "empty"}`}
      style={{ backgroundColor: i < level ? color : undefined }}
    />
  ));

  return (
    <div className="skill-dots-container">
      <div className="skill-name">{name}</div>
      <div className="dots-container">{dots}</div>
    </div>
  );
};

export default SkillDots;
