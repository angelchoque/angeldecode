import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs"
import styles from '@styles/Experience.module.scss'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${styles.experience__container}`}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>HTML</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>CSS</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>JavaScript</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>Bootstrap</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>Tailwind</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>React</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}

        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>Node JS</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>MongoDB</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>PHP</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>MySql</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>Python</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles['experience__details-icon']} />
              <div>
                <h4>Rust</h4>
                <small className={styles['text-light']}>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience