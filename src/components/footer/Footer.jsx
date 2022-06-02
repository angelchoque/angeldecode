/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { FaTwitter } from "react-icons/fa"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANGEL DECODE</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
      </ul>

      <ul className="footer__socials">
        <a href="https://facebook.com"> <FaFacebookF /> </a>
        <a href="https://instagram.com"> <FiInstagram /> </a>
        <a href="https://twitter.com"> <FaTwitter /> </a>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Angel Decode. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer