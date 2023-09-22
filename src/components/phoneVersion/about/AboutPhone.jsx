import styles from "./styled.module.scss";

import Header from "../../tabletVersion/about/Header.jsx";
import Biography from "../../tabletVersion/about/Biography.jsx";

import myPhoto from "../../../assets/me.png";

function AboutPhone() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.pageName}>About me</h3>
      <Header />
      <div className={styles.imageContainer}>
        <img src={myPhoto} alt="myPhoto" />
      </div>

      <Biography />
    </div>
  );
}

export default AboutPhone;
