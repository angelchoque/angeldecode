import React, { useRef, useState }from 'react'
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { BsCheckCircleFill } from "react-icons/bs"
import Loading from '../loading/Loading';
import styles from '@styles/Contact.module.scss'

const Contact = () => {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)
  const [done, setDone] = useState(true)

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)
    emailjs.sendForm('service_4qy6u0d', 'template_qj1bk7e', form.current, 'fGI-TdaZvH7vjKqaJ')
      .then((result) => {
          setIsLoading(false)
          setDone(true)
          e.target.reset()
      }, (error) => {
      });
  }
  return (
    <section id='contact'>
      <h5>Get It Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles['contact__option-icon']} />
            <h4>Email</h4>
            <h5>hello@angeldecode.com</h5>
            <a href="mailto:hello@angeldecode.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className={styles.contact__option}>
            <BsWhatsapp className={styles['contact__option-icon']} />
            <h4>WhatsaApp</h4>
            <h5>+51 943486851</h5>
            <a href="https://api.whatsapp.com/send?phone=51943486851" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        {/* FORM CONTACT */}
        
        <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>
          <input
            disabled={isLoading}
            className={`${styles['contact__form-input']} ${isLoading && "disabled-item"}`}
            type="text"
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input
            disabled={isLoading}
            className={`${styles['contact__form-input']} ${isLoading && "disabled-item"}`}
            type="email"
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            className={`${styles['contact__form-input']} ${isLoading && "disabled-item"}`}
            name="message"
            rows="7"
            placeholder='Your Message'
            required
            disabled={isLoading}
          >
          </textarea>
          {isLoading && <Loading className={styles.contact__loading}/>}
          {done 
            ? <span className={styles["check-done-container"]}><BsCheckCircleFill className={styles["contact__check-done"]} />The message has been sent successfully</span>
            : <button disabled={isLoading} type='submit' className={`btn btn-primary ${isLoading && "disabled-item"}`}>Send Message</button>}
        </form>
      </div>
    </section>
  )
}

export default Contact