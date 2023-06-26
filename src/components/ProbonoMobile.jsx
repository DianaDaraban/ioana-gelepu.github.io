import React, { useState } from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_probono-01.jpg'
import probonoData from '../data/probonoData'

export default function ProbonoMobile() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
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
    <div className="probono-container" id="probono">
      <div
        className="banner-probono"
        style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
        onLoad={opacityChange}
      >
        <img src={banner} alt="banner-probono" />
      </div>

      <div className="text-probono-container">
        <h2 className="title-probono" style={{ color: 'white' }}>
          Pro bono
        </h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <ul className="experience-list" style={{ color: 'white' }}>
            {probonoDescription}
          </ul>
        </div>
      </div>
    </div>
  )
}
