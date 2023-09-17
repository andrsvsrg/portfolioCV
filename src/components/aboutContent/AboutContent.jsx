import React from 'react'
import BackgroundPopupCanvas from '../backgroundPopupCanvas/BackgroundPopupCanvas.jsx'
import styles from './styled.module.scss'
import myPhoto from '../../assets/me.png'
import ContactSection from './contactSection/ContactSection.jsx'
import DownloadButton from '../downloadButton/DownloadButton.jsx'

function AboutContent({ closeHandler }) {
  return (
    <div className={styles.container}>
      <BackgroundPopupCanvas/>
      <div className={styles.content}>

        <div className={styles.myPhoto}>
          <img width="100%" src={myPhoto} alt="My Photo"/>
        </div>
        <div className={styles.aboutMeBlock}>

          <div className={styles.mainHeader}>
            <h3>About me</h3>
            <section>
              <h2>Androsov Serhii</h2>
              <span className={styles.subheader}>Javascript / Frontend Developer</span><br/>
              <span className={styles.subheader} >28 years / Kyiv, Ukraine</span>
            </section>

            <span className={styles.textAboutMe}>
              wish I had a yandere girl. So small, with a sweet voice, with cat ears. With unusual hair and eye color.
              With a smile that could drive you crazy. With soft hands, a neat ass. She'd make me pancakes with sour
              cream in the morning. To bring coffee to my cheese maker at night. To say "Nya" when I pet her. To snuggle
              up to me when it's cold. I want her to wear pajamas around the house.
            </span>
          </div>

          <section className={styles.educationBlock}>
            <h3>Education</h3>
            2012-2015 — Cracow University of Economics, Applied Computer Science ( Poland, Cracow )
          </section>

          <section className={styles.experienceBlock}>
            <h3>Work experience</h3>
            <span>2021 - to present time , Gradual training in web development and pet project development.</span><br/>
            <span>October 2022 - to present time , Integrality, Javascript developer (HTML, CSS, JS, jQuery).</span>
          </section>

          <section className={styles.contacts}>
            <ContactSection type={'email'}/>
            <ContactSection type={'telegram'}/>
            <ContactSection type={'linkedin'}/>
            <ContactSection type={'phone'}/>
          </section>

          <div className={styles.downloadButton}>
            <DownloadButton/>
          </div>

        </div>
        <div className={styles.closeButton} >
          <svg onClick={closeHandler} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 20L4 4M20 4L4 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>

  )
}

export default AboutContent