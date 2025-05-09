import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return <footer id='contacts' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
            <a href="mailto:bhaleraovinit3013@gmail.com">Email</a>
        </li> 
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
            <a href="https://www.linkedin.com/in/bhalerao-vinit3013/">linkedin/Vinit-Bhalerao</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
            <a href="https://github.com/VinitBhalerao3012">github/Vinit</a>
        </li>
    </ul>
  </footer>
}
