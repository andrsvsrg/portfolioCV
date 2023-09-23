import styles from "./styled.module.scss";

import { useState } from "react";

import ProjectCard from "../../projectsContent/projectCard/ProjectCard.jsx";
import arrow from "../../../assets/Arrow.svg";

function ProjectsPhone({ myProjects }) {
  const [isShowMore, setIsShowMore] = useState(false);

  function handlerShowMore() {
    setIsShowMore(true);
  }
  return (
    <>
      {isShowMore ? (
        <>
          {myProjects.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </>
      ) : (
        <>
          <ProjectCard project={myProjects[0]} />
          <div onClick={handlerShowMore} className={styles.showMoreButton}>
            <span>Show more</span>
            <img src={arrow} alt="arrow" />
          </div>
        </>
      )}
    </>
  );
}

export default ProjectsPhone;
