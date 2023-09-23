import styles from "./styled.module.scss";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import icon from "../../../assets/rate.svg";

function SkillProgressBar({ skill, width }) {
  const { name, description, percentage } = skill;
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      entry.target.style.left = `calc(${percentage}% - 25px)`; // so interesting
    }
  }, [inView]);

  return (
    <div style={{ width: `${width}` }} className={styles.progressContainer}>
      <div className={styles.progressBarContainer}>
        <div className={styles.skillName}>{name}</div>

        <div ref={ref} className={styles.percentageIndicator}>
          <img src={icon} alt="Icon" />
          <div className={styles.percentageText}>{percentage}%</div>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default SkillProgressBar;
