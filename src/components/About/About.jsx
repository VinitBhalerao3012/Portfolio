import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";
import graph from "../../../assets/AnimatedSkills/graph.json";
import coder from "../../../assets/AnimatedSkills/coder.json";
import Lottie from 'lottie-react';

export const About = () => {
  return <section className={styles.container} id="about"> 
    <h2 className={styles.title}> About </h2>
    <div className={styles.content}>
        <img 
         src={getImageUrl("about/about.svg")}
         alt="Me sitting on a desk"
         className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={graph} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Data Analyst</h3>
                    <p>I'm pursuing MSc. Computing and Information Systems at University of South Wales
                    and will be graduated in July 2025
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={coder} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Senior System Engineer</h3>
                    <p>
                    Engineered backend systems and REST APIs using Java, Python, and SQL Server to enhance enterprise application performance.
                    Contributed to healthcare system features and integrations with Cerner, Athena Health, and Epic FHIR, ensuring secure data exchange.
                    Utilized Azure DB and Key Vault for scalable storage and secure credential management.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={coder} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                    Enhanced Siebel CRM user workflows by customising front-end components with JavaScript, HTML, and CSS.
                    Improved user experience and interface responsiveness in enterprise systems through automation and UI optimisation.
                    Collaborated on full-stack solutions, integrating front-end updates with secure backend services and REST APIs.
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}
