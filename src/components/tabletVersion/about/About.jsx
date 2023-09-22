import styles from "../about/styled.module.scss";

import Biography from './Biography.jsx'
import Header from './Header.jsx'
import myPhoto from '../../../assets/me.png'

function About() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.pageName}>About me</h3>
      <div className={styles.content}>
        <div className={styles.myImage}>
          <img src={myPhoto} alt="myPhoto" />
        </div>
        <div className={styles.aboutInfo}>
          <Header/>
          <Biography/>
        </div>
      </div>
    </div>
  );
}

export default About;
