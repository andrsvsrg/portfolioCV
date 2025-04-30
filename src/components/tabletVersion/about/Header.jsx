import styles from "./styled.module.scss";

function Header(props) {
  return (
    <>
      <section>
        <h2>Androsov Serhii</h2>
        <div className={styles.subHeader}>
          <span>Javascript / Frontend Developer</span>
          <br />
          <span>{ calculateAge('1995-02-10') } years / Kyiv, Ukraine</span>
        </div>
      </section>
    </>
  );
}

export default Header;

function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
