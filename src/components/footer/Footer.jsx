import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram , AiFillGithub} from 'react-icons/ai'
  
function Footer() {
  return (
    <footer>
      <a href="#header" className='footer_logo'>VUTRAN</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/vutran32.photo/"> <BsFacebook/> </a>
        <a href="https://www.instagram.com/vutran_photo/"> <AiFillInstagram/> </a>
        <a href="https://github.com/VuTran-it"> <AiFillGithub/> </a>
      </div>
    </footer>
  )
}

export default Footer