import React from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_echipa-01.jpg'
import storyData from '../data/storyData'

export default function Povestea() {
  const storyDescription = storyData[0].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const storyDescription2 = storyData[1].map((item) => {
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
        <h2 className="title-experience">Povestea</h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">
            De unde venim? Ce suntem? Încotro ne îndreptăm?
          </h3>
          <h3 className="text-description-title">
            Care este povestea acestui cabinet?
          </h3>
          <ul className="experience-list">{storyDescription}</ul>
        </div>
        <h3 className="text-description-title">Ce ne propunem să oferim?</h3>
        <ul className="experience-list">{storyDescription2}</ul>
      </div>
    </div>
  )
}
