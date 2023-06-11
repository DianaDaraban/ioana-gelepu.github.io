import React from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_echipa-01.jpg'
import teamData from '../data/teamData'

export default function Echipa() {
  const teamDescription = teamData[0].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const teamDescription2 = teamData[1].map((item) => {
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
        <h2 className="title-experience">Echipa</h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">{teamData[0][0].fullName}</h3>
          <ul className="experience-list">{teamDescription}</ul>
        </div>
        <div className="text-description-container">
          <h3 className="text-description-title camelia">
            {teamData[1][0].fullName}
          </h3>
          <ul className="experience-list">{teamDescription2}</ul>
        </div>
      </div>
    </div>
  )
}
