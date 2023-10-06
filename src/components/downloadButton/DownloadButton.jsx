import styles from "./styled.module.scss";
function DownloadButton() {
  return (
    <a href="/assets/CV.pdf" download="CV.pdf" className={styles.button}>
      <span>Download full CV</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M6.5 10.5L10.5 14.732L14.5 10.541M10.5 3.5V14.5M4.5 17.5H16.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default DownloadButton;
