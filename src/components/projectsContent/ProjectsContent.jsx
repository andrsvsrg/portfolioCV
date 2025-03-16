import styles from "./styled.module.scss";

import BackgroundPopupCanvas from "../backgroundPopupCanvas/BackgroundPopupCanvas.jsx";
import ProjectCard from "./projectCard/ProjectCard.jsx";
import DownloadButton from "../downloadButton/DownloadButton.jsx";

import { myProjects } from "../../helpers/data.jsx";

function ProjectsContent({ closeHandler }) {
  return (
    <div className={styles.container}>
      <BackgroundPopupCanvas />
      <div className={styles.content}>
        <div className={styles.projectsBlock}>
          <h3 className={styles.pageName}>My Projects</h3>
          <p className={styles.mainDescription}>
            Here are some of the projects I’ve worked on, including both publicly available products and internal systems. I continuously strive to develop new skills and challenge myself with personal projects.
          </p>

          <div>
            <h4>Notable Projects:</h4>
            <ul>
              <li>
                <a href="https://backendless.com" target="_blank" rel="noopener noreferrer">Backendless </a>
                - A product I contributed to, publicly available. I improved the UI-builder to enhance functionality and user experience. Additionally, I worked on the FlowRunner platform, focusing on external service integrations and OAuth2 architecture.
              </li>
              <li>
                <strong>Internal System for Doctors</strong> - A closed project that involved building a secure system for managing medical data. Due to confidentiality, I cannot provide further details or links.
              </li>
              <li>
                <strong>Personal Projects</strong> - I regularly create small applications to challenge myself and improve my skills. These include tools for data visualization, task management, and more.
              </li>
            </ul>
          </div>

          <p className={styles.mainDescription}>
            Below are some of my personal projects that helped me grow as a developer:
          </p>

          <div className={styles.projects}>
            {myProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
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
