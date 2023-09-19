import styles from "./styled.module.scss";

import BackgroundPopupCanvas from "../backgroundPopupCanvas/BackgroundPopupCanvas.jsx";
import ProjectCard from "./projectCard/ProjectCard.jsx";
import DownloadButton from "../downloadButton/DownloadButton.jsx";

import { myProjects } from "../../helpers/data.js";

function ProjectsContent({ closeHandler }) {
  return (
    <div className={styles.container}>
      <BackgroundPopupCanvas />
      <div className={styles.content}>
        <div className={styles.projectsBlock}>
          <h3 className={styles.pageName}>My projects</h3>
          <p className={styles.mainDescription}>
            A little about my projects, I constantly expand my knowledge and
            consolidate it with completed projects.
          </p>
          <div className={styles.projects}>
            {myProjects.map((project) => {
              return <ProjectCard key={project.name} project={project} />;
            })}
          </div>

          <div className={styles.downloadButton}>
            <DownloadButton />
          </div>
        </div>

        <div className={styles.closeButton}>
          <svg
            onClick={closeHandler}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 20L4 4M20 4L4 20"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProjectsContent;
