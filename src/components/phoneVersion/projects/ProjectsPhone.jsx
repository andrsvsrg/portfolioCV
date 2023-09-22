import styles from "./styled.module.scss";
import { useState } from "react";
import ProjectCard from "../../projectsContent/projectCard/ProjectCard.jsx";

function ProjectsPhone({ myProjects }) {
  const [isShownMore, setIsShownMore] = useState();

  return (
    <>
      {isShownMore ? (
        <>
          <ProjectCard project={myProjects[0]} />
          <div></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProjectsPhone;
