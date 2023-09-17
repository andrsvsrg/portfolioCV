import React from 'react'
import styles from './styled.module.scss'
import AboutContent from '../aboutContent/AboutContent.jsx'
import SkillsContent from '../skillsContent/SkillsContent.jsx'
import ProjectsContent from '../projectsContent/ProjectsContent.jsx'
function Popup({ typeOfContent, setTypeOfPopUpContent }) {    // 'about', 'skills', 'projects'
  const closeHandler = () => {
    setTypeOfPopUpContent(null)
    document.body.style.overflowY = 'auto'
  }

  const contentComponents = {
    about: <AboutContent closeHandler={closeHandler} />,
    skills: <SkillsContent closeHandler={closeHandler} />,
    projects: <ProjectsContent  closeHandler={closeHandler}/>,
  };

  const contentToDisplay = contentComponents[typeOfContent] || null;


  return (
    <div className={styles.container}>
      {contentToDisplay}
    </div>
  )
}

export default Popup