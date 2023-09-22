import styles from "./styled.module.scss";

import BackgroundPopupCanvas from "../backgroundPopupCanvas/BackgroundPopupCanvas.jsx";
import ContactSection from "./contactSection/ContactSection.jsx";
import DownloadButton from "../downloadButton/DownloadButton.jsx";

import myPhoto from "../../assets/me.png";

function AboutContent({ closeHandler }) {
  return (
    <div className={styles.container}>
      <BackgroundPopupCanvas />
      <div className={styles.content}>
        <div className={styles.myPhoto}>
          <img width="100%" src={myPhoto} alt="My Photo" />
        </div>
        <div className={styles.aboutMeBlock}>
          <div className={styles.mainHeader}>
            <h3>About me</h3>
            <section>
              <h2>Androsov Serhii</h2>
              <span className={styles.subheader}>
                Javascript / Frontend Developer
              </span>
              <br />
              <span className={styles.subheader}>28 years / Kyiv, Ukraine</span>
            </section>

            <span className={styles.textAboutMe}>
              Hello! I'll tell you a little about myself, I studied in Poland in
              the field of "Applied Computer Science", where I got basic
              knowledge about client and server development of web applications,
              for the past 2 years I've been studying the fontend part and now
              I'm still diving into the backend (NodeJS, ExpressJS, MongoDB), to
              understand the full cycle of web application development. I really
              liked creating the logic of the site on JS both on the back end
              and on the front end, thinking about all kinds of algorithms for
              the implementation of various tasks. In my spare time, I solve
              tasks on codewars.com, take part in various programming events,
              recently took part in Europe's largest IT challenge - Dev
              Challange in the frontend category, and made it to the finals with
              my interactive map project, also took part in a charity event by
              creating a Marvel-themed game in the team and, most importantly,
              gained experience working with Git in the team. I do not stop
              there, but want to continue my work in an interesting and complex
              project (Product), in which I will be able to deepen my knowledge.
            </span>
          </div>

          <section className={styles.educationBlock}>
            <h3>Education</h3>
            2012-2015 — Cracow University of Economics, Applied Computer Science
            ( Poland, Cracow )
          </section>

          <section className={styles.experienceBlock}>
            <h3>Work experience</h3>
            <span>
              2021 - to present time , Gradual training in web development and
              pet project development.
            </span>
            <br />
            <span>
              October 2022 - to present time , Integrality, Javascript developer
              (HTML, CSS, JS, jQuery).
            </span>
          </section>

          <section className={styles.contacts}>
            <ContactSection type={"email"} mWidth={'260px'} />
            <ContactSection type={"telegram"} mWidth={'260px'}/>
            <ContactSection type={"linkedin"} mWidth={'260px'}/>
            <ContactSection type={"phone"} mWidth={'260px'}/>
          </section>

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

export default AboutContent;
