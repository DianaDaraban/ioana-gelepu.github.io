import React from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_activitati-01.jpg'
import activitiesData from '../data/activitiesData'

export default function Activitati() {
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
        <h2 className="title-experience">Activitati notabile recente</h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">Lorem Ipsum</h3>
          <ul className="experience-list">{activitiesDescription}</ul>
        </div>
      </div>
    </div>
  )
}
