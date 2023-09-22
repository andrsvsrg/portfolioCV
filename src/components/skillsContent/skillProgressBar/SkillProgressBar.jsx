import styles from "./styled.module.scss";

import { useEffect, useRef } from "react";

import icon from "../../../assets/rate.svg";

function SkillProgressBar({ skill, width }) {
  const { name, description, percentage } = skill;

  const indicatorRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      indicatorRef.current.style.left = `calc(${percentage}% - 25px)`; // so interesting
    }, 0);
  }, []);

  return (
    <div style={{ width: `${width}` }} className={styles.progressContainer}>
      <div className={styles.progressBarContainer}>
        <div className={styles.skillName}>{name}</div>

        <div ref={indicatorRef} className={styles.percentageIndicator}>
          <img src={icon} alt="Icon" />
          <div className={styles.percentageText}>{percentage}%</div>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${percentage}%` }}>
            &nbsp;
          </div>
        </div>
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default SkillProgressBar;
