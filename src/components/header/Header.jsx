import Image from 'next/image'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import styles from "../../styles/Header.module.scss"

import ME from "../../assets/me.png"

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <div className={`container ${styles['header__container']}`}>
        <h5>Hello I'm</h5>
        <h1>Angel Choque</h1>
        <h5 className={styles['text-light']}>Full Stack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className={styles.me}>
          <Image src={ME} alt="Angel Choque" />
        </div>

        <a href="#contact" className={styles['scroll__down']}>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header