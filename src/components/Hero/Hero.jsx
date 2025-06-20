import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinit Bhalerao</h1>
        <p className={styles.description}>
        A Data Analyst with a strong foundation in analytics, dashboard development, and data storytelling. Recently completed an MSc in Computing and Information Systems at the University of South Wales, and currently awaiting results.
        </p>
        <a
          href="https://linkedin.com/in/bhalerao-vinit3013"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/vinit.png")} alt="Hero Image" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};