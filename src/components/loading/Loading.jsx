import React from 'react'
import styles from '@styles/Loading.module.scss'
const Loading = () => {
  return (
    <div className={styles.loading}>
      <div class={styles.spinner}></div>
      Sending...
    </div>
  )
}

export default Loading
