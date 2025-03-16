import styles from './styled.module.scss';

function Biography() {
  return (
    <>
      <h3 className={ styles.blockHeader }>Biography</h3>
      <section className={ styles.biographyText }>
        <p>
          I am a passionate JavaScript full-stack developer with a strong focus on frontend technologies like React and
          Redux. I love solving complex problems and am driven to continuously grow my skills. I have experience
          building backend systems from scratch, including server configuration and deployment, using Node.js,
          Express.js, MongoDB, and MySQL.
        </p>
        <p>
          In my spare time, I challenge myself with coding tasks on Codewars and participate in programming events. I
          was a finalist in Europe's Dev Challenge and contributed to a Marvel-themed game for a charity event.
        </p>
        <p>
          I’m always looking for new challenges to apply my knowledge and explore emerging technologies.
        </p>
      </section>

      <section>
        <h3 className={ styles.blockHeader }>Education</h3>
        <span className={ styles.boldText }>2012-2015</span> — Cracow University of Economics, Applied Computer Science
        (Poland, Cracow)
      </section>

      <section>
        <h3 className={ styles.blockHeader }>Languages</h3>
        <span>
          <span className={ styles.boldText }>English</span> — Intermediate
          <br/>
          <span className={ styles.boldText }>Polish</span> — Upper-Intermediate
          <br/>
          <span className={ styles.boldText }>Ukrainian</span> — Native
        </span>
      </section>

      <section className={ styles.workExperience }>
        <h3 className={ styles.blockHeader }>Work Experience</h3>

        <span>
          <p>
            <span className={ styles.boldText }>11/2023 – Present, </span>
            <span className={ styles.boldText }>Full-Stack Developer</span><br/>
            Backendless - Remote<br/>
          </p>

          <span className={ styles.boldText }>Technologies:</span> React, Redux, Node.js, Express.js

          <ul>
            <li>Improved and optimized the UI-builder (a low-code service), enhancing its functionality and user experience.</li>
            <li>Developed and integrated WebSocket-based real-time communication features to improve system interactivity and responsiveness.</li>
            <li>Worked on the FlowRunner platform, focusing on integration with external services and building a robust architecture for OAuth2 connections.</li>
          </ul>
        </span>

        <br/>

        <span>
          <p>
            <span className={ styles.boldText }>09/2024 – 12/2024, Backend Developer </span><br/>
            Freelance (alongside main job)<br/>
          </p>

          <span className={ styles.boldText }>Technologies:</span> Node.js, MySQL(Sequelize), Express.js, Cloud Storage

          <ul>
            <li>Designed and implemented the backend architecture for the platform using Node.js and MySQL.</li>
            <li>Developed functionality to support the full workflow: client registration, sample processing by lab technicians, result entry, and final approval with electronic signatures by doctors.</li>
            <li>Deployed the solution on a cloud-based VPS with a production-ready configuration for high availability.</li>
            <li>Integrated cloud storage solutions to ensure secure and efficient data management.</li>
          </ul>
        </span>

        <br/>

        <span>
          <p>
             <span className={ styles.boldText }>10/2022 – 11/2023, JavaScript Developer </span><br/>
            Integrality OÜ - Remote<br/>
          </p>

          <span className={ styles.boldText }>Technologies:</span> JavaScript, jQuery

          <ul>
            <li>Developed and optimized scripts for data restructuring and manipulation.</li>
            <li>Participated in team initiatives to enhance workflows and project outcomes.</li>
            <li>Delivered solutions to complex challenges while maintaining high-quality standards.</li>
          </ul>
        </span>
      </section>
    </>
  );
}

export default Biography;
