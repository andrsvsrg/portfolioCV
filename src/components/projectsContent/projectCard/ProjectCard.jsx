import React from 'react'
import styles from './styled.module.scss'

function ProjectCard({project}) {
  const {name, description, img, codeLink, website} = project
  return (
    <div className={styles.container}>
      <div className={styles.projectName}>
        {name}
      </div>
      <div className={styles.image}>
        <img src={img} alt={name}/>
      </div>
      <div className={styles.description}>
          <span>
            {description}
          </span><br/>
          <div className={styles.links}>
            <a target='_blank' href={codeLink}>Code</a>
            {website && <a target='_blank' href={website}>Web-site</a>}
          </div>


      </div>
    </div>
  )
}

export default ProjectCard