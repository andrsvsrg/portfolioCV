import styles from "./styled.module.scss";
import ContactSection from "../../aboutContent/contactSection/ContactSection.jsx";
import DownloadButton from "../../downloadButton/DownloadButton.jsx";

function MyContacts(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.screenName}>My Contacts</h3>

        <section className={styles.contactContainer}>
          <ContactSection type={"email"} mWidth={"400px"} />
          <ContactSection type={"telegram"} mWidth={"400px"} />
          <ContactSection type={"linkedin"} mWidth={"400px"} />
          <ContactSection type={"phone"} mWidth={"400px"} />
        </section>

        <div className={styles.downloadButton}>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

export default MyContacts;
