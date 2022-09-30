import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
   <h5>What Skills I Have</h5>
   <h2>My Experience</h2>

   <div className="container experience-container">
    <div className="experience-frontend">
      <h3>Frontend Development</h3>
      <div className="experience-content">
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
     <div>
      <h4>HTML</h4>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
     <div>
      <h4>CSS</h4>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
     <div>
      <h4>JavaScript</h4>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
     <div>
      <h4>BootStrap</h4>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     {/* <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
    <div>
       <h4>Tailwind</h4>
     <small className='text-light'>Experienced</small>
    </div>
     </article> */}
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
     <div>
      <h4>React</h4>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
      </div>
 </div>

 {/* BACKEND */}

     <div className="experience-backend"> 
    <h3>Backend Development</h3>
     <div className="experience-content">
        <div className="experience-content">
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
     <div>
      <h4>NODE JS</h4>
     <small className='text-light'>Intermediate</small>
     </div>
     </article>
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
    <div>
       <h4>MONGO BD</h4>
     <small className='text-light'>Intermediate</small>
    </div>
     </article>
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
     <div>
      <h4>PHP</h4>
     <small className='text-light'>Basic</small>
     </div>
     </article>
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
    <div>
       <h4>MY SQL</h4>
     <small className='text-light'>Basic</small>
    </div>
     </article>
     <article className='experience-details'>
     <BsPatchCheckFill className='experience-details-icon'/>
     <div>
      <h4>PYTHON</h4>
     <small className='text-light'>Basic</small>
     </div>
     </article>
      </div>
      </div>



     </div>
   </div>
    </section>
  )
}

export default Experience
