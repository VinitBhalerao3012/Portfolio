import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinit Bhalerao</h1>
        <p className={styles.description}>
        A Data Analyst with 2+ years of experience specialising in SQL, Power BI, Python, and data storytelling. MSc Computing and Information Systems — Merit, University of South Wales (2025). Open to new opportunities across the UK.
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