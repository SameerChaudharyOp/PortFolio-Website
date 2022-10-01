import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'target='_blank' rel="noopener noreferrer">Download CV</a>
        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
    </div> 
  )
}

export default CTA
