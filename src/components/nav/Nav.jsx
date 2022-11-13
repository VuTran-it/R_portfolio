import React from 'react'
import './nav.css'
import {AiFillHome,AiFillMessage,AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceFill } from 'react-icons/ri'
import {useState} from 'react'

function Nav() {
  const [activeNav,setActiveNav] = useState('')
    
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsJournalBookmarkFill/></a>
      <a href="#services"onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#portfolio"onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>

    </nav>
  )
}

export default Nav