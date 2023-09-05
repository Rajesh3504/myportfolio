import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/rajesh-p-863332235/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/Rajesh3504" target='_blank'><SiGithub/></a>
        <a href="https://instagram.com/zeus._.0354?igshid=NGExMmI2YTkyZg== " target='_blank'><RiInstagramFill/></a>
    </div>
  )
}

export default HeaderSocials