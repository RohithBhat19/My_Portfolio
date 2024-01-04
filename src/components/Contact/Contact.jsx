import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    
        <footer id="contact" className={styles.container}>
          <div className={styles.text}>
            <h2>Contact</h2>
            <p>Let's Connect...!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:rohithbhat198@gmail.com">rohithbhat198@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a href="https://www.linkedin.com/in/rohith-bhat-1884021b4">linkedin.com/RohithBhat</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://github.com/RohithBhat19">github.com/RohithBhat</a>
            </li>
          </ul>
        </footer>
      );
    };
  


export default Contact