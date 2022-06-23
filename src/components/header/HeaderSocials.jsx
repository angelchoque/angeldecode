import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs"

import styles from "@styles/Header.module.scss"

const HeaderSocials = () => {
  return (
    <div className={styles['header__socials']}>
      <a href="https://www.linkedin.com/in/angeldecode" target="_blank" rel="noopener noreferrer"> <BsLinkedin /> </a>
      <a href="https://github.com/angelchoque" target="_blank" rel="noopener noreferrer"> <BsGithub /> </a>
      <a href="#" target="_blank" rel="noopener noreferrer"> <BsDribbble /> </a>
    </div>
  )
}

export default HeaderSocials