import styles from "./styled.module.scss";

import { Parallax } from "react-scroll-parallax";

import React, { useState } from "react";
import TypedHeader from "./typedHeader/TypedHeader.jsx";
import CanvasAnimation from "./mainCanvas/Canvas.jsx";
import Arrow from "./arrow/Arrow.jsx";
import InteractionTable from "./interactionTable/InteractionTable.jsx";
import Popup from "./popup/Popup.jsx";

import useClickOutside from "../helpers/useClickOutside.js";
import useBreakpoint from "../helpers/useBreakpoint.js";
import About from "./mobileVersion/about/About.jsx";
import Skills from "./mobileVersion/skills/Skills.jsx";
import Projects from "./mobileVersion/projects/Projects.jsx";

function HomePage() {
  const [typeOfPopupContent, setTypeOfPopUpContent] = useState(null); // 'about', 'skills', 'projects' , null
  const breakpoint = useBreakpoint(); // S || M
  const popupRef = useClickOutside(closePopup);

  function closePopup() {
    setTypeOfPopUpContent(null);
    document.body.style.overflowY = "auto";
  }

  return (
    <div className={styles.wrapper}>
      <Parallax speed={-100}>
        <div style={{ height: "100vh" }}>
          <CanvasAnimation />
          <div className={styles.typedHeader}>
            <TypedHeader />
          </div>
          <Arrow />
        </div>
      </Parallax>
      <Parallax speed={0}>
        {breakpoint === "M" && (
          <>
            {!!typeOfPopupContent && (
              <div className={styles.overlay}>
                <Popup
                  popupRef={popupRef}
                  setTypeOfPopUpContent={setTypeOfPopUpContent}
                  typeOfContent={typeOfPopupContent}
                />
              </div>
            )}
            <InteractionTable setTypeOfPopUpContent={setTypeOfPopUpContent} />
          </>
        )}
        {breakpoint === "S" && (
          <>
            <About />
            <Skills />
            <Projects />
          </>
        )}
      </Parallax>
    </div>
  );
}

export default HomePage;
