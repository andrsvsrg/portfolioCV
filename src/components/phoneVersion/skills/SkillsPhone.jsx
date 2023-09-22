import styles from './styled.module.scss'
import { skills, skillsArr } from '../../../helpers/data.jsx'
import SkillProgressBar from '../../skillsContent/skillProgressBar/SkillProgressBar.jsx'
import React from 'react'

function SkillsPhone(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.pageName}>My skills</h3>
        <p>
          I don’t stop gaining knowledge for a day; at the moment I have worked with many technologies, libraries, etc.
        </p>
        <p className={styles.lastParagraph}>
          I delved into some of them, some only superficially, here is most of what I worked with:
        </p>
        <div className={styles.skillsContainer}>
          {
            skillsArr.map((skill => <span key={skill} className={styles.skillBox}>{skill}</span>))
          }
        </div>
        <div className={styles.progressBar}>
          {skills.map((skill) => {
            return <SkillProgressBar key={skill.name} skill={skill} width={'100%'} />;
          })}
        </div>
      </div>

    </div>
  )
}

export default SkillsPhone