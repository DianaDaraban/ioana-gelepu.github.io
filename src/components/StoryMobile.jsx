import React, { useState } from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_echipa-01.jpg'
import storyData from '../data/storyData'

export default function StoryMobile() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
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
    <div className="story-container" id="story">
      <div
        className="banner-story"
        style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
        onLoad={opacityChange}
      >
        <img src={banner} alt="banner-story" />
      </div>

      <div className="text-story-container">
        <h2 className="title-story" style={{ color: 'white' }}>
          Povestea
        </h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">
            De unde venim? Ce suntem? Încotro ne îndreptăm?
          </h3>
          <h3 className="text-description-title">
            Care este povestea acestui cabinet?
          </h3>
          <ul className="experience-list" style={{ color: 'white' }}>
            {storyDescription}
          </ul>
        </div>
        <h3 className="text-description-title">Ce ne propunem să oferim?</h3>
        <ul className="experience-list" style={{ color: 'white' }}>
          {storyDescription2}
        </ul>
      </div>
    </div>
  )
}
