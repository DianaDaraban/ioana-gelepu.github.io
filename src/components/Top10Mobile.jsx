import React, { useState } from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_top10-01.jpg'
import top10Data from '../data/top10Data'

export default function Top10Mobile() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
  const top10Description = top10Data.map((item) => {
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
    <div className="top10-container" id="top10">
      <div
        className="banner-top10"
        style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
        onLoad={opacityChange}
      >
        <img src={banner} alt="banner-top10" />
      </div>

      <div className="text-top10-container" style={{ color: 'white' }}>
        <h2 className="title-top10">
          Top 10 proiecte relevante gestionate de avocatul titular
        </h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">
            (ﬁnalizate prin soluții deﬁnitive favorabile în tot sau în parte sau
            prin tranzacții)
          </h3>
          <ul className="experience-list">{top10Description}</ul>
        </div>
      </div>
    </div>
  )
}
