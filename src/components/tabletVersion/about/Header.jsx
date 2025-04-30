import styles from "./styled.module.scss";

import { calculateAge } from '../../../helpers/helpers.js'

function Header(props) {
  return (
    <>
      <section>
        <h2>Androsov Serhii</h2>
        <div className={styles.subHeader}>
          <span>Javascript / Full-stack Developer </span>
          <br />
          <span>{ calculateAge('1995-02-10') } years / Kyiv, Ukraine</span>
        </div>
      </section>
    </>
  );
}

export default Header;
