import styles from "./styled.module.scss";

import { useEffect, useState } from "react";

import DownloadButton from "../downloadButton/DownloadButton.jsx";

const randomDelay = (coefficient) => Math.random() * coefficient;
function TypedHeader() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const welcomeText = "a JavaScript developer.";
  const welcomeText2 = "a Full-Stack developer.";
  const [selectedTyping, setSelectedTyping] = useState(welcomeText);

  async function clearWelcomeMessage() {
    for (let i = welcomeMessage.length; i > 0; i--) {
      await new Promise((resolve) => {
        setTimeout(() => {
          setWelcomeMessage((prev) => prev.slice(0, -1));
          resolve();
        }, randomDelay(100));
      });
    }
    setSelectedTyping((prev) =>
      prev === welcomeText ? welcomeText2 : welcomeText,
    );
    setIsTyping(true);
  }
  async function typeWelcomeMessage() {
    const welcomeArr = selectedTyping.split("");
    for (let i = 0; i < welcomeArr.length; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          setWelcomeMessage((prev) => prev + welcomeArr[i]);
          resolve();
        }, randomDelay(300));
      });
    }
    setIsTyping(false);
  }
  useEffect(() => {
    if (isTyping) {
      setTimeout(() => typeWelcomeMessage(), 500);
    } else {
      setTimeout(() => clearWelcomeMessage(), 1500);
    }
  }, [isTyping]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.typedHeader}>
          <span className={styles.welcome}> Hi, </span>
          <br />
          <span>I`m Serhii Androsov,</span> <br />
          <span>{welcomeMessage}</span>
        </div>

        <div className={styles.downloadButton}>
          <DownloadButton />
        </div>
      </div>
    </>
  );
}

export default TypedHeader;
