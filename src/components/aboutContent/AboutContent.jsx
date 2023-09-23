import styles from "./styled.module.scss";

import BackgroundPopupCanvas from "../backgroundPopupCanvas/BackgroundPopupCanvas.jsx";
import ContactSection from "./contactSection/ContactSection.jsx";
import DownloadButton from "../downloadButton/DownloadButton.jsx";

import myPhoto from "../../assets/me.png";
import Biography from "../tabletVersion/about/Biography.jsx";

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
            <h3 className={styles.blockName}>About me</h3>
            <section>
              <h2>Androsov Serhii</h2>
              <span className={styles.subheader}>
                Javascript / Frontend Developer
              </span>
              <br />
              <span className={styles.subheader}>28 years / Kyiv, Ukraine</span>
            </section>
          </div>
          <Biography />

          <section className={styles.contacts}>
            <ContactSection type={"email"} mWidth={"260px"} />
            <ContactSection type={"telegram"} mWidth={"260px"} />
            <ContactSection type={"linkedin"} mWidth={"260px"} />
            <ContactSection type={"phone"} mWidth={"260px"} />
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
