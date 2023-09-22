import styles from "../projects/styled.module.scss";
import { myProjects } from "../../../helpers/data.jsx";
import ProjectCard from "../../projectsContent/projectCard/ProjectCard.jsx";
import ProjectsPhone from "../../phoneVersion/projects/ProjectsPhone.jsx";

function Projects({ isMobile }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.pageName}>My projects</h3>

      <span className={styles.projectsText}>
        A little about my projects, I constantly expand my knowledge and
        consolidate it with completed projects.
      </span>

      <section
        style={{ gridTemplateColumns: `repeat(${isMobile ? 1 : 2}, 1fr)` }}
        className={styles.projectsContainer}
      >
        {isMobile ? (
          <ProjectsPhone myProjects={myProjects} />
        ) : (
          myProjects.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })
        )}
      </section>
    </div>
  );
}

export default Projects;
