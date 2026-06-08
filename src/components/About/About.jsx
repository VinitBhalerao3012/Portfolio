import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";
import graph from "../../../assets/AnimatedSkills/graph.json";
import coder from "../../../assets/AnimatedSkills/coder.json";
import project from "../../../assets/AnimatedSkills/project.json";
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
                    <p>MSc Computing and Information Systems — Merit, University of South Wales (2025). 2+ years of experience transforming data into actionable insights using SQL, Power BI, Python, Tableau, and Google BigQuery.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={coder} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Data Analyst</h3>
                    <p>
                    Led data initiatives at Infosys by building interactive Power BI dashboards, automating KPI reports using SQL and Python, and delivering self-serve analytics for 100+ stakeholders across Finance and Marketing. Reduced manual reporting effort by 70% through end-to-end pipeline automation and maintained high data quality through anomaly detection and validation.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={project} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Data Analytics Projects</h3>
                    <p>
                    Built end-to-end analytics projects including a cloud retail pipeline (Python, BigQuery, SQL, Looker Studio), ML sales forecasting using Prophet, Power BI dashboards, and customer segmentation models. Projects live on GitHub with full documentation.
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}
