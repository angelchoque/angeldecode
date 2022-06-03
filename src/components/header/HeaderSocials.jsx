import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs"

import styles from "@styles/Header.module.scss"

const HeaderSocials = () => {
  return (
    <div className={styles['header__socials']}>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"> <BsLinkedin /> </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer"> <BsGithub /> </a>
      <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer"> <BsDribbble /> </a>
    </div>
  )
}

export default HeaderSocials