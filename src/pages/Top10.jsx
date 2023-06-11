import React from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_top10-01.jpg'
import top10Data from '../data/top10Data'

export default function Top10() {
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
        <h2 className="title-experience">
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
