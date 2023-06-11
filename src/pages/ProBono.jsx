import React from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_probono-01.jpg'
import probonoData from '../data/probonoData'

export default function ProBono() {
  const probonoDescription = probonoData.map((item) => {
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
        <h2 className="title-experience">Pro bono</h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <ul className="experience-list">{probonoDescription}</ul>
        </div>
      </div>
    </div>
  )
}
