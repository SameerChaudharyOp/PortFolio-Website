import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className='service'>
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
          <li>
            <BiCheck className='service-list-icon' />
            <p>Front-end programming (Coding)</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Responsive web design</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>UI design</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Figma</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>User testing</p>
          </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service-head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service-list">
          <li>
            <BiCheck className='service-list-icon' />
            <p>Strong creative ability.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Attention to detail</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Excellent problem-solving skills</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>A keen interest in technology</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>A logical approach to work</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>The ability to explain technical matters clearly</p>
          </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service-head">
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className="service-list">
          <li>
            <BiCheck className='service-list-icon' />
            <p>Instagram Skills</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Web Content Skills</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Photography Skills</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>SEO Skills</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Photography Skills</p>
          </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
