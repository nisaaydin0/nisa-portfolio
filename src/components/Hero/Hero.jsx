import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nisa </h1>
        <p className={styles.description}>
        I'm a full-stack developer with an Industrial Engineering background, specializing in React, Node.js, and database optimization. I apply analytical thinking to build efficient and user-friendly applications. Let’s collaborate!
        </p>
        <a href="mailto:nisaayddin@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/resume.pdf" download="Nisa_Resume.pdf">
    <button className={styles.downloadBtn}>Download Resume</button>
        </a>
      


      </div>
      <img src={getImageUrl("hero/developer.png")} alt="Hero image" className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};