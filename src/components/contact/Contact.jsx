import React  from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

const form = useRef();

 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uaaui4l', 'template_b7g9dro', form.current, 'Cu9oOcWd5rCmGGAmb')

    e.target.reset()
  }


  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact-container">
      <div className="contact-options">
        <article className='contact-option'> 
        <AiOutlineMail className='contact-option-icon'/>
       <h4>Email</h4>
       <h5>Sameerchaudhary749@gmail.com</h5>
       <a href="mailto:sameerchaudhary749@gmail.com" target="_blank" rel="noopener noreferrer">Send A Message</a>
        </article>
        <article className='contact-option'> 
        <AiFillGithub className='contact-option-icon'/>
       <h4>GitHub</h4>
       <h5>SameerChaudharyOp</h5>
       <a href="https://github.com/SameerChaudharyOp" target="_blank" rel="noopener noreferrer">Send A Message</a>
        </article>
        <article className='contact-option'> 
        <BsWhatsapp className='contact-option-icon'/>
       <h4>WhatsApp</h4>
       <h5>9619753930</h5>
       <a href="https://wa.me/919619753930" target="_blank" rel="noopener noreferrer">Send A Message</a>
        </article>
      </div>

{/* END OF CONTACT OPTION */}
       <form ref={form} onSubmit={sendEmail}>
     <input type="text" name='name' placeholder='Your Full Name' required />
     <input type="email" name='email' placeholder='Your Email'/>
     <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
     <button type='submit' className='btn btn-primary'>Send Message</button>        
       </form>

     </div>

    </section>
  )
}

export default Contact
