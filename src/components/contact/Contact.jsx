import React, { useRef, useState }from 'react'
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { BsCheckCircleFill } from "react-icons/bs"
import Loading from '../loading/Loading';
import "./Contact.css"

const Contact = () => {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)
  const [done, setDone] = useState(false)

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
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:angelchoque@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Angel Choque</h5>
            <a href="https://m.me" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsaApp</h4>
            <h5>+51 943486851</h5>
            <a href="https://api.whatsapp/send?phone+51943486851" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        {/* FORM CONTACT */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          {isLoading && <Loading className="contact__loading"/>}
          {done ? <BsCheckCircleFill class="contact__check-done" /> : <button type='submit' className='btn btn-primary'>Send Message</button>}
        </form>
      </div>
    </section>
  )
}

export default Contact