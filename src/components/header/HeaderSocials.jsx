import React from 'react'
import {GrInstagram} from 'react-icons/gr'
import {BsFacebook, BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.instagram.com/vutran_photo/" target="_blank"><GrInstagram/></a>
        <a href="https://github.com/VuTran-it" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/vutran32.photo/" target="_blank"><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials