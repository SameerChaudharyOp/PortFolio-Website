import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs' 

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.instagram.com/ig_sameer_tweet/?igshid=YmMyMTA2M2Y%3D" target="_blank rel=noopener noreferrer"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/sameer-chaudhari-1189b722a/" target="_blank" rel="noopener noreferrer"><BsLinkedin/> </a>
        <a href="https://github.com/SameerChaudharyOp" target="_blank" rel="noopener noreferrer"><BsGithub /> </a>
    </div>
  )
}

export default HeaderSocials
