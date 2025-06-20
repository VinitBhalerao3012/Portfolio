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
                    <p>Recently completed an MSc in Computing and Information Systems at the University of South Wales and currently awaiting final results. Skilled in transforming data into actionable insights using tools like SQL, Power BI, R, Tableau and Python.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={coder} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Senior System Engineer</h3>
                    <p>
                    Led data initiatives at Infosys by building interactive dashboards and automating KPI reports using SQL, Power BI, and Excel. Delivered self-serve analytics solutions for Sales and Operations, standardised KPI definitions, and maintained high data quality through anomaly detection and automated validation pipelines.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <Lottie loop={true} animationData={project} className={styles.lottieImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Data Analytics Projects</h3>
                    <p>
                    Developed data-driven projects including customer segmentation models, ticket backlog dashboards, and crime analysis tools. Used SQL, Python, Power BI, and QGIS to uncover insights, build scalable dashboards, and support strategic decision-making across teams.
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}
