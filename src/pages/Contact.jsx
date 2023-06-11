import React from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_contact-01.jpg'
import contactData from '../data/contactData'

export default function Contact() {
  const contactDescription = contactData.map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  return (
    <div className="experience-container">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="banner-experience">
          <img src={banner} alt="banner-experience" />
        </div>
      </div>
      <div className="text-container">
        <h2 className="title-experience">Contact</h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <ul className="contact-list">{contactDescription}</ul>
        </div>
      </div>
    </div>
  )
}
