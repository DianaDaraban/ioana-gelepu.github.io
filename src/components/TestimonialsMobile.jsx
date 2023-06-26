import React, { useState } from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_testimoniale-01.jpg'
import testimonialsData from '../data/testimonialsData'

export default function TestimonialsMobile() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
  const testimonialsDescription = testimonialsData.map((item) => {
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
    <div className="testimonials-container" id="testimonials">
      <div
        className="banner-testimonials"
        style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
        onLoad={opacityChange}
      >
        <img src={banner} alt="banner-experience" />
      </div>

      <div className="text-testimonials-container">
        <h2 className="title-testimonials" style={{ color: 'white' }}>
          Testimoniale
        </h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <ul className="experience-list" style={{ color: 'white' }}>
            {testimonialsDescription}
          </ul>
        </div>
      </div>
    </div>
  )
}
