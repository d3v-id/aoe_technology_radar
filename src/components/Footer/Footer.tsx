import React from "react";

import SkillDots from "../Radar/SkillDots";
import styles from "./Footer.module.css";

import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { getAppName, getImprintUrl, getLabel, getLogoUrl } from "@/lib/data";

export function Footer() {
  const logoUrl = getLogoUrl();
  return (
    <div className={styles.footer}>
      <div className={styles.branding}>
        <img src={logoUrl} className={styles.logo} alt={getAppName()} />
        <p className={styles.description}>{getLabel("footer")}</p>
        <SocialLinks className={styles.socialLinks} />
      </div>
      <a href={getImprintUrl()} className={styles.imprint} target="_blank">
        {getLabel("imprint")}
      </a>

      <div className="skills-container">
      <div className="skills-card">
        <h1 className="skills-title">💼 Skills</h1>
        <SkillDots name="C#" level={4} color="blue" />
        <SkillDots name="Python" level={5} color="green" />
        <SkillDots name="JavaScript" level={3} color="yellow" />
      </div>
    </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white p-6 max-w-md mx-auto rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">💼 Skills</h1>
      <SkillDots name="C#" level={4} color="bg-indigo-500" />
      <SkillDots name="Python" level={5} color="bg-green-500" />
      <SkillDots name="JavaScript" level={3} color="bg-yellow-500" />
    </div>
  );
};

export default Skills;
