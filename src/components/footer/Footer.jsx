import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiLinkedin} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#/" className='footer-logo'>Sameer</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
         <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
           <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
             <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
      </ul>
    

    <div className="footer-socials">
      <a href="https://www.instagram.com/ig_sameer_tweet/?igshid=YmMyMTA2M2Y%3D"><AiOutlineInstagram /></a>
      <a href="https://www.linkedin.com/in/sameer-chaudhari-1189b722a/" target="_blank rel=noopener noreferrer"><FiLinkedin /></a>
      <a href="https://github.com/SameerChaudharyOp" target="_blank rel=noopener noreferrer"><BsGithub /></a>
    </div>

    <div className="footer-copyright">
      <small>&copy; Sameer Portfolio</small>
    </div>

    </footer>
  )
}

export default Footer
