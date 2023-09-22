import styles from '../skills/styled.module.scss'
import { skills, skillsArr } from '../../../helpers/data.jsx'
import SkillProgressBar from '../../skillsContent/skillProgressBar/SkillProgressBar.jsx'
import React from 'react'

function Skills() {


  return <div className={styles.wrapper}>
    <h3 className={styles.pageName}>My skills</h3>
    <div className={styles.content}>
      <section className={styles.skillsBlock}>
        <div className={styles.skillsText}>
          I don’t stop gaining knowledge for a day; at the moment I have worked with many technologies, libraries, etc.
          <p>I delved into some of them, some only superficially, here is most of what I worked with:</p>
        </div>
        <div className={styles.skillsContainer}>
          {
            skillsArr.map((skill => <span key={skill} className={styles.skillBox}>{skill}</span>))
          }
        </div>
      </section>
      <section className={styles.progressBars} >
        {skills.map((skill) => {
          return <SkillProgressBar key={skill.name} skill={skill} width={'335px'} />;
        })}
      </section>

    </div>


  </div>
}

export default Skills
