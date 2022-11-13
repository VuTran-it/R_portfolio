import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className='about_icon' />
              <h5>Experience</h5>
              <small>0 Years working</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>

            <article className="about_card">
              <AiFillFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
            <p>
              Currently, information technology is one of the majors that are focused on in the training system of the University of Information Technology as well as other universities offering this discipline. It is considered a spearhead training industry towards the development of technology and science and technology in today's digital age.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About