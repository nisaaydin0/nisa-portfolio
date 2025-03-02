import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="../../../public/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:myemail@email.com">nisaayddin@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="../../../public/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nisa-ayd%C4%B1n-kasap/">linkedin.com/in/nisa-aydın-kasap/</a>
        </li>
        <li className={styles.link}>
          <img src="../../../public/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/nisaaydin0">github.com/nisaaydin0</a>
        </li>
      </ul>
    </footer>
  );
};