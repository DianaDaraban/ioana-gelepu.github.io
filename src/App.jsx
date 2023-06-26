import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import NavigationMobile from './components/NavigationMobile'
import Activitati from './pages/Activitati'
import Contact from './pages/Contact'
import Echipa from './pages/Echipa'
import Experienta from './pages/Experienta'
import Povestea from './pages/Povestea'
import ProBono from './pages/ProBono'
import Testimoniale from './pages/Testimoniale'
import Top10 from './pages/Top10'
import ExperienceMobile from './components/ExperienceMobile'
import Top10Mobile from './components/Top10Mobile'
import TeamMobile from './components/TeamMobile'
import StoryMobile from './components/StoryMobile'
import TestimonialsMobile from './components/TestimonialsMobile'
import ProbonoMobile from './components/ProbonoMobile'
import ActivitiesMobile from './components/ActivitiesMobile'
import ContactMobile from './components/ContactMobile'
import '../src/styles/styles.css'
import Language from './components/Language'
import '../src/styles/language.css'
import '../src/styles/mediaQuery.css'
import backgroundImg from './assets/logo_fundal-01.png'
import logo from './assets/logo-01.png'
import banner from './assets/banner_experience-01.jpg'

function App() {
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const opacityChange = () => {
    setTimeout(() => {
      setBannerOpacity(1)
    }, 100)
  }
  return (
    <>
      <NavigationMobile />
      <div className="main-container">
        <div className="logo-background">
          <img
            src={backgroundImg}
            alt="logo-fundal"
            className="img-logo-background"
          />
        </div>
        <Language />
        <Navigation />

        <Routes>
          <Route path="/" element={<Experienta />} />
          <Route path="/top10" element={<Top10 />} />
          <Route path="/echipa" element={<Echipa />} />
          <Route path="/povestea" element={<Povestea />} />
          <Route path="/testimoniale" element={<Testimoniale />} />
          <Route path="/probono" element={<ProBono />} />
          <Route path="/activitati" element={<Activitati />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="main-container-mobile">
        <div className="main-page">
          <div
            className="banner-main"
            style={{ opacity: bannerOpacity, transition: 'all 1s ease-in' }}
            onLoad={opacityChange}
          >
            <img src={banner} alt="banner-experience" />
          </div>
          <div className="logo-container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="logo-background-mobile">
          <img
            src={backgroundImg}
            alt="logo-fundal"
            className="img-logo-background-mobile"
          />
        </div>
        <div className="content-pages">
          <ExperienceMobile />
          <Top10Mobile />
          <TeamMobile />
          <StoryMobile />
          <TestimonialsMobile />
          <ProbonoMobile />
          <ActivitiesMobile />
          <ContactMobile />
        </div>
      </div>
    </>
  )
}

export default App
