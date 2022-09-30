import React from 'react'
import './About.css'
import My2 from '../../assets/My2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi' 
import {VscFolderLibrary} from 'react-icons/vsc' 

const About = () => {
  return (
 <section id='about'>
   <h5 className='fix'>GEt Know</h5>
   <h2 className='fix'>About ME</h2>

   <div className="container about-container">
    <div className="about-me">
      <div className="about-me-image">
     <img src={My2} alt="" />
     </div>
    </div>
    <div className="about-content">
      <div className="about-cards">
        <article className='about-card'>
          <FaAward className='about-icon' />
          <h5>Experience</h5>
          <small>Html,Css,JavaScript and React</small>
         </article>
         <article className='about-card'>
          <FiUsers className='about-icon' />
          <h5>Masters In IT</h5>
          <small>Bachlors In COmputer Science</small>
         </article>
         <article className='about-card'>
          <VscFolderLibrary className='about-icon' />
          <h5>OVERALL Projects</h5>
          <small>20+</small>
         </article>
      </div>
      <p>FrontEnd Developer with the knowledge of Html, Css, JavaScript and React. Also used Bootstrap for building a responsive portfolio website. built 2-3 projects on React js and many projects in Html and css, Passionate about learning and development with a desire to apply skills to bigger projects</p>
      
       <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
   </div>




 </section>
  )
}

export default About
