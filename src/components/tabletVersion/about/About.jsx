import styles from "../about/styled.module.scss";

import myPhoto from "../../../assets/me.png";
function About() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.pageName}>About me</h3>
      <div className={styles.content}>
        <div className={styles.myImage}>
          <img src={myPhoto} alt="myPhoto" />
        </div>
        <div className={styles.aboutInfo}>
          <section>
            <h2>Androsov Serhii</h2>
            <div className={styles.subHeader}>
              <span>Javascript / Frontend Developer</span>
              <br />
              <span>28 years / Kyiv, Ukraine</span>
            </div>
          </section>
          <h3 className={styles.biographyHeader}>Biography</h3>
          <section className={styles.biographyText}>
            <p>
              Hello! I'll tell you a little about myself, I studied in Poland in
              the field of "Applied Computer Science", where I got basic
              knowledge about client and server development of web applications,
              for the past 2 years I've been studying the fontend part and now
              I'm still diving into the backend (NodeJS, ExpressJS, MongoDB), to
              understand the full cycle of web application development.
            </p>
            <p>
              I really liked creating the logic of the site on JS both on the
              back end and on the front end, thinking about all kinds of
              algorithms for the implementation of various tasks.
            </p>
            <p>
              In my spare time, I solve tasks on codewars.com, take part in
              various programming events, recently took part in Europe's largest
              IT challenge - Dev Challange in the frontend category, and made it
              to the finals with my interactive map project, also took part in a
              charity event by creating a Marvel-themed game in the team and,
              most importantly, gained experience working with Git in the team.
            </p>
            <p>
              I don’t stop there, but want to continue my work in an interesting
              and complex project (Product), in which I will be able to deepen
              my knowledge.
            </p>
          </section>
          <section>
            <h3>Education</h3>
            2012-2015 — Cracow University of Economics, Applied Computer Science
            ( Poland, Cracow )
          </section>
          <section>
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
        </div>
      </div>
    </div>
  );
}

export default About;
