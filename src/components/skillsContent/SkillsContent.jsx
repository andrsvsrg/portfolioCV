import React from 'react'
import styles from './styled.module.scss'
import BackgroundPopupCanvas from '../backgroundPopupCanvas/BackgroundPopupCanvas.jsx'
import SkillProgressBar from './skillProgressBar/SkillProgressBar.jsx'
import { skills } from '../../helpers/projectsData.js'
import DownloadButton from '../downloadButton/DownloadButton.jsx'



function SkillsContent({closeHandler}) {
  return (
    <div className={styles.container}>
      <BackgroundPopupCanvas/>
      <div className={styles.content}>

        <div className={styles.skillsBlock}>
          <div className={styles.pageName}>
            My Skills
          </div>
          <div className={styles.mainDescription}>
            I wish I had a yandere girl. So small, with a sweet voice, with cat ears. With unusual hair and eye color. With a smile that could drive you crazy. With soft hands, a neat ass. She'd make me pancakes with sour cream in the morning.
          </div>


          <div className={styles.skillsProgressBars}>
            {
              skills.map(skill => {
                return <SkillProgressBar key={skill.name} skill={skill}/>
              })
            }
          </div>

          <div className={styles.downloadButton}>
            <DownloadButton/>
          </div>

        </div>


        <div className={styles.closeButton} >
          <svg onClick={closeHandler} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 20L4 4M20 4L4 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>


    </div>
  )
}

export default SkillsContent