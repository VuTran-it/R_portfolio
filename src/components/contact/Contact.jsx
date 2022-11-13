import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6koznlq', 'template_hcm6nlk', form.current, 'KQrYWLS81hO_9mUCK')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>vutran.it.2k1@gmail.com</h5>
            <a href="mailto:vutran.it.2k1@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>vutran</h5>
            <a href="https://m.me/vutran32.photo" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div class="Inputbox">
              <input type="text" name='name' required/>
              <span>Your Full Name</span>
          </div>
          <div class="Inputbox">
              <input type="text" name='email' required/>
              <span>Your Email</span>
          </div>
          <div class="Inputbox">
              <textarea name="message" id=""rows="7" required></textarea>
              <span>Your Message</span>
          </div>
          
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact