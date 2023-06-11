import React from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_experience-01.jpg'
import experienceData from '../data/experienceData'

export default function Experienta() {
  const experienceDescription = experienceData.map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })

  const textData = Object.values(experienceData[10].text)

  const experienceText = textData.map((item) => {
    return (
      <li>
        <div className="circle-text2">
          <div></div>
        </div>
        <div>{item}</div>
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
        <h2 className="title-experience">Experiența. Domenii de activitate</h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">Litigii comerciale</h3>
          <ul className="experience-list">{experienceDescription}</ul>
          <ul className="experience-list2">{experienceText}</ul>
        </div>
      </div>
    </div>
  )
}
