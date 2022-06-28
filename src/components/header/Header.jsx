import Image from 'next/image'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import styles from "@styles/Header.module.scss"

import ME from "../../assets/me.png"
// import Home from '../Home/Home'

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <div className={`container ${styles['header__container']}`}>
        <h5>Hello I'm</h5>
        <h1>Angel Decode</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        {/* <Home /> */}
        <CTA />
        <HeaderSocials />

        <picture className={styles.me}>
          <Image src={ME} alt="Angel Choque" />
        </picture>

        <a href="#contact" className={styles['scroll__down']}>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header