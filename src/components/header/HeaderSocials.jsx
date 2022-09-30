import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs' 

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.instagram.com/ig_sameer_tweet/?igshid=YmMyMTA2M2Y%3D" target="_blank rel=noopener noreferrer"><BsInstagram/></a>
        <a href="https://linkdin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/> </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><BsGithub /> </a>
    </div>
  )
}

export default HeaderSocials
