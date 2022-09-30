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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service-list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
