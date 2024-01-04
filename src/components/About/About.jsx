import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={getImageUrl("about/aboutImages.png")} alt = "Me sitting with Laptop"  className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>I recently graduated from Sapthagiri College Of Engineering<br/>B.E in Information Science: CGPA: 8.02/10</p>
            </div>
          </li>
          <li className= {styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>Passionate and skilled in Java, HTML, CSS, JavaScript, SQL, and React.js, actively seeking full-time opportunities and contribute my technical expertise.</p>
            </div>
          </li>
          <li className= {styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
              Dedicated to creating great user experiences, I'm eager for a challenging role to use my skills and contribute to the success of a forward-thinking business.
              </p>
            </div>
          </li>
        </ul>
        </div>
    </section>
  )
}

export default About