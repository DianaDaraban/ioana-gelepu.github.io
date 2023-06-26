import React, { useState } from 'react'
import '../styles/experienta.css'
import logo from '../assets/logo-01.png'
import banner from '../assets/banner_experience-01.jpg'
import experienceData from '../data/experienceData'

export default function Experienta() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
  const experienceDescription1 = experienceData[0].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const experienceDescription2 = experienceData[1].map((item) => {
    console.log(item.description)
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const experienceDescription3 = experienceData[2].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const experienceDescription4 = experienceData[3].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const experienceDescription5 = experienceData[4].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const experienceDescription6 = experienceData[5].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const experienceDescription7 = experienceData[6].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })
  const experienceDescription9 = experienceData[8].map((item) => {
    return (
      <li>
        <div className="circle-text">
          <div></div>
        </div>
        <div>{item.description}</div>
      </li>
    )
  })

  const textData1 = Object.values(experienceData[1][0].text)
  const textData2 = Object.values(experienceData[1][1].text)
  const textData3 = Object.values(experienceData[1][2].text)
  const textData4 = Object.values(experienceData[1][3].text)

  const experienceText1 = textData1.map((item) => {
    return (
      <li>
        <div className="circle-text2">
          <div></div>
        </div>
        <div>{item}</div>
      </li>
    )
  })
  const experienceText2 = textData2.map((item) => {
    return (
      <li>
        <div className="circle-text2">
          <div></div>
        </div>
        <div>{item}</div>
      </li>
    )
  })
  const experienceText3 = textData3.map((item) => {
    return (
      <li>
        <div className="circle-text2">
          <div></div>
        </div>
        <div>{item}</div>
      </li>
    )
  })
  const experienceText4 = textData4.map((item) => {
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
        <div
          className="banner-experience"
          style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
          onLoad={opacityChange}
        >
          <img src={banner} alt="banner-experience" />
        </div>
      </div>
      <div className="text-container">
        <h2 className="title-experience">Experiența. Domenii de activitate</h2>
        <div className="line-experience"></div>
        <div className="text-description-container">
          <h3 className="text-description-title">Litigii comerciale</h3>
          <ul className="experience-list">{experienceDescription1}</ul>
          <h3 className="text-description-title">
            Litigii de contencios administrativ și proceduri administrative
          </h3>
          <ul className="experience-list">{experienceDescription2[0]}</ul>
          <ul className="experience-list2">{experienceText1}</ul>
          <ul className="experience-list">{experienceDescription2[1]}</ul>
          <ul className="experience-list2">{experienceText2}</ul>
          <ul className="experience-list">{experienceDescription2[2]}</ul>
          <ul className="experience-list2">{experienceText3}</ul>
          <ul className="experience-list">{experienceDescription2[3]}</ul>
          <ul className="experience-list2">{experienceText4}</ul>
          <h3 className="text-description-title">Litigii de muncă</h3>
          <ul className="experience-list">{experienceDescription3}</ul>
          <h3 className="text-description-title">Litigii civile</h3>
          <ul className="experience-list">{experienceDescription4}</ul>
          <h3 className="text-description-title">
            Proceduri execuționale (demarate în baza unor hotărâri judecătorești
            sau a unor acte cărora legea le conferă caracter de titlu
            executoriu, inclusiv a unor cecuri și bilete la ordin) și litigii
            conexe
          </h3>
          <ul className="experience-list">{experienceDescription5}</ul>
          <h3 className="text-description-title">
            Litigii de proprietate intelectuală
          </h3>
          <ul className="experience-list">{experienceDescription6}</ul>
          <h3 className="text-description-title">Arbitraje interne</h3>
          <ul className="experience-list">{experienceDescription7}</ul>
          <h3 className="text-description-title">
            Litigii privind procedura insolvenței
          </h3>
          <h3 className="text-description-title">Litigii sportive</h3>
          <ul className="experience-list">{experienceDescription9}</ul>
          <h3 className="text-description-title">Litigii privind malpraxis</h3>
          <h3 className="text-description-title">
            Dispute pre-litigioase care implică asistența acordată clientului în
            vederea unei poziționări optime în cadrul negocierilor purtate pe
            marginea unei situații potențial litigioase
          </h3>
        </div>
      </div>
    </div>
  )
}
