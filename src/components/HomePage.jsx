import styles from "./styled.module.scss";

import { useState } from "react";

import TypedHeader from "./typedHeader/TypedHeader.jsx";
import CanvasAnimation from "./mainCanvas/Canvas.jsx";
import Arrow from "./arrow/Arrow.jsx";
import InteractionTable from "./interactionTable/InteractionTable.jsx";
import Popup from "./popup/Popup.jsx";
import About from "./tabletVersion/about/About.jsx";
import Skills from "./tabletVersion/skills/Skills.jsx";
import Projects from "./tabletVersion/projects/Projects.jsx";
import MyContacts from "./tabletVersion/myContacts/MyContacts.jsx";
import AboutPhone from "./phoneVersion/about/AboutPhone.jsx";
import SkillsPhone from "./phoneVersion/skills/SkillsPhone.jsx";

import { Parallax } from "react-scroll-parallax";
import useClickOutside from "../helpers/useClickOutside.js";
import useBreakpoint from "../helpers/useBreakpoint.js";

function HomePage() {
  const [typeOfPopupContent, setTypeOfPopUpContent] = useState(null); // 'about', 'skills', 'projects' , null
  const breakpoint = useBreakpoint(); // desktop || tablet || phone
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
        {breakpoint === "desktop" && (
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
        {breakpoint === "tablet" && (
          <>
            <About />
            <Skills />
            <Projects />
            <MyContacts />
          </>
        )}
        {breakpoint === "phone" && (
          <>
            <AboutPhone />
            <SkillsPhone />
            <Projects isMobile={true} />
            <MyContacts isMobile={true} />
          </>
        )}
      </Parallax>
    </div>
  );
}

export default HomePage;
