import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className={styles["contact-card__wrapper"]}>
      <h2>{t("contact_us")}</h2>
      <div className={styles["contact-card"]}>
        <div className={styles["contact-card__inner"]}>
          <div className={styles["contact-info"]}>
            <img
              src="/images/phone-forwarded.svg"
              className={styles.icon}
            ></img>
            <p>+995 555 02 79 97</p>
          </div>
          <div className={styles["contact-info"]}>
            <img src="/images/mail.svg" className={styles.icon}></img>
            <p>rossario.official@gmail.com</p>
          </div>
          <div className={styles.mail}></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
