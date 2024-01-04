import React from 'react'
import skills from "../../data/skill.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.titles}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{
          skills.map((skill,id)=>{
            return <div key={id} className={styles.skill}> 
            <div className={styles.skillImage}><img src={getImageUrl(skill.imageSrc)}alt={skill.title}/></div>
            <p>{skill.title}</p>
            </div>
          })
          }</div>
        <ul className={styles.history}>
          {
            history.map((historyItem,id)=>{
              return(
                <li key={id}  className={styles.historyItem}>
                  <div className={styles.details}>
                    <h3>{historyItem.title}</h3>
                    <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                  </div>

                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Skills