import styles from "@styles/Header.module.scss"

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href="#" download className='btn'>Download CV</a>
      <a href="#contact" className={`btn btn-primary`}>Let's Talk</a>
    </div>
  )
}

export default CTA