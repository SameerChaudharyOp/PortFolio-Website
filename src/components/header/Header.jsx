import React from 'react'
import './Header.css'
import CTA from './CTA'
import MYY from '../../assets/MYY.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
<header>
  <div className="container header-container" id='home'>
    <h4>Hello I'm</h4>
    <h1>Sameer Chaudhari</h1>
    <h3 className='text-light'>I'm a Frontend Developer</h3>
    <CTA />
    <HeaderSocials />

    <div className="me">
      <img src={MYY} alt="" />
    </div>

    <a href="#contact" className='scroll-down'>Scroll Down</a>
  </div>
</header>
  )
}

export default Header




