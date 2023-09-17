import React from 'react'
import styles from './styled.module.scss'
import BackgroundPopupCanvas from '../backgroundPopupCanvas/BackgroundPopupCanvas.jsx'
import SkillProgressBar from './skillProgressBar/SkillProgressBar.jsx'
import { skills } from '../../helpers/data.js'
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

            I don’t stop gaining knowledge for a day; at the moment I have worked with many technologies, libraries, etc. I delved into some of them, some only superficially, here is most of what I worked with:
            <span style={{fontWeight: 'bold'}}> Redux toolkit, RTK query, Axios, Three.js, ChakraUI, MaterialUI, Styled Components, Tailwind CSS, React router, Puppeteer...  </span>
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