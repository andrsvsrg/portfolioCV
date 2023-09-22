import styles from "./styled.module.scss";

import { icons, contents } from "../../../helpers/data.jsx";
function ContactSection({ type, mWidth }) {
  const headers = {
    email: "Email",
    telegram: "Telegram",
    linkedin: "Linkedin",
    phone: "Phone number",
  };

  return (
    <div style={{ maxWidth: `${mWidth}` }} className={styles.container}>
      <div className={styles.header}>
        {icons[type]}
        <span>{headers[type]}</span>
      </div>
      <div>{contents[type]}</div>
    </div>
  );
}

export default ContactSection;
