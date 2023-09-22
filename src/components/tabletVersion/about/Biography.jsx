import React from "react";
import styles from "./styled.module.scss";

function Biography(props) {
  return (
    <>
      <h3 className={styles.blockHeader}>Biography</h3>
      <section className={styles.biographyText}>
        <p>
          Hello! I'll tell you a little about myself, I studied in Poland in the
          field of "Applied Computer Science", where I got basic knowledge about
          client and server development of web applications, for the past 2
          years I've been studying the frontend part and now I'm still diving
          into the backend (NodeJS, ExpressJS, MongoDB), to understand the full
          cycle of web application development.
        </p>
        <p>
          I really liked creating the logic of the site on JS both on the back
          end and on the front end, thinking about all kinds of algorithms for
          the implementation of various tasks.
        </p>
        <p>
          In my spare time, I solve tasks on codewars.com, take part in various
          programming events, recently took part in Europe's largest IT
          challenge - Dev Challange in the frontend category, and made it to the
          finals with my interactive map project, also took part in a charity
          event by creating a Marvel-themed game in the team and, most
          importantly, gained experience working with Git in the team.
        </p>
        <p>
          I don’t stop there, but want to continue my work in an interesting and
          complex project (Product), in which I will be able to deepen my
          knowledge.
        </p>
      </section>
      <section>
        <h3 className={styles.blockHeader}>Education</h3>
        <span className={styles.boldText}>2012-2015</span> — Cracow University
        of Economics, Applied Computer Science ( Poland, Cracow )
      </section>
      <section>
        <h3 className={styles.blockHeader}>Languages</h3>
        <span>
          <span className={styles.boldText}>English</span> — Pre-intermediate/
          Intermediate
          <br />
          <span className={styles.boldText}>Polish</span> — Upper-Intermediate
          <br />
          <span className={styles.boldText}>Ukrainian</span> — Native
          <br />
        </span>
      </section>
      <section className={styles.workExperience}>
        <h3 className={styles.blockHeader}>Work experience</h3>
        <span>
          <span className={styles.boldText}>2021 - to present time</span> ,
          Gradual training in web development and pet project development.
        </span>
        <br />
        <span>
          <span className={styles.boldText}>
            2022 October - to present time
          </span>{" "}
          , Integrality, Javascript developer (HTML, CSS, JS, jQuery).
        </span>
      </section>
    </>
  );
}

export default Biography;
