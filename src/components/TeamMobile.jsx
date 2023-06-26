import React, { useState } from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_echipa-01.jpg'
import teamData from '../data/teamData'

export default function TeamMobile() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
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
    <div className="team-container" id="team">
      <div
        className="banner-team"
        style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
        onLoad={opacityChange}
      >
        <img src={banner} alt="banner-experience" />
      </div>

      <div className="text-team-container">
        <h2 className="title-team" style={{ color: 'white' }}>
          Echipa
        </h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">{teamData[0][0].fullName}</h3>
          <ul className="experience-list" style={{ color: 'white' }}>
            {teamDescription}
          </ul>
        </div>
        <div className="text-description-container">
          <h3 className="text-description-title camelia">
            {teamData[1][0].fullName}
          </h3>
          <ul className="experience-list" style={{ color: 'white' }}>
            {teamDescription2}
          </ul>
        </div>
      </div>
    </div>
  )
}
