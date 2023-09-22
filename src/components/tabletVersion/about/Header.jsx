import styles from './styled.module.scss'

function Header(props) {
  return (
    <>
      <section>
        <h2>Androsov Serhii</h2>
        <div className={styles.subHeader}>
          <span>Javascript / Frontend Developer</span>
          <br />
          <span>28 years / Kyiv, Ukraine</span>
        </div>
      </section>
    </>
  )
}

export default Header