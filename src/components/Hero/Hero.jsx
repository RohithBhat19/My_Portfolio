import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Rohith Bhat</h1>
            <p className={styles.description}>
                I'm actively seeking full-time employment opportunities that leverage my robust skills in Java, JavaScript and React.js. Reach out if you'd like to know more!
            </p>
            <a href="mailto:rohithbhat198@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        
        <img src={getImageUrl("hero/rohith-modified.png")} alt = "Hero Image" className={styles.HeroImg} />
      
        <div className={styles.TopBlur}/>
        <div className={styles.BottomBlur} />
    </section>
  )
}
