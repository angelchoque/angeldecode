import React from 'react'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import styles from '@styles/About.module.scss'
import ME from "../../assets/me.png"
import Image from 'next/image'

const About = () => {
  return (
    <section id="about">
      <h5>Get to now</h5>
      <h2>About Me</h2>

      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__me}>
          <picture className={styles['about__me-image']}>
            <Image src={ME} alt="angel choque" />
          </picture>
        </div>

        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clients</h5>
              <small>10+Worldwide</small>
            </article>

            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum numquam deserunt architecto nihil suscipit iusto quaerat, atque deleniti quo amet aspernatur reprehenderit sint iste omnis nam dolore officiis soluta voluptas?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About