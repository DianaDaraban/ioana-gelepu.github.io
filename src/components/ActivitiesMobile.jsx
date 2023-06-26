import React, { useState } from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_activitati-01.jpg'
import activitiesData from '../data/activitiesData'

export default function ActivitiesMobile() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
  const activitiesDescription = activitiesData.map((item) => {
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
    <div className="activities-container" id="activities">
      <div
        className="banner-activities"
        style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
        onLoad={opacityChange}
      >
        <img src={banner} alt="banner-activities" />
      </div>

      <div className="text-activities-container">
        <h2 className="title-activities" style={{ color: 'white' }}>
          Activitati notabile recente
        </h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">Lorem Ipsum</h3>
          <ul className="experience-list" style={{ color: 'white' }}>
            {activitiesDescription}
          </ul>
        </div>
      </div>
    </div>
  )
}
