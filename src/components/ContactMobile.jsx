import React, { useState } from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_contact-01.jpg'
import contactData from '../data/contactData'

export default function ContactMobile() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
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
    <div className="contact-container" id="contact">
      <div
        className="banner-contact"
        style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
        onLoad={opacityChange}
      >
        <img src={banner} alt="banner-contact" />
      </div>

      <div className="text-contact-container">
        <h2 className="title-contact" style={{ color: 'white' }}>
          Contact
        </h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <ul className="contact-list" style={{ color: 'white' }}>
            {contactDescription}
          </ul>
        </div>
      </div>
    </div>
  )
}
