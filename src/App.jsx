import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Activitati from './pages/Activitati'
import Contact from './pages/Contact'
import Echipa from './pages/Echipa'
import Experienta from './pages/Experienta'
import Povestea from './pages/Povestea'
import ProBono from './pages/ProBono'
import Testimoniale from './pages/Testimoniale'
import Top10 from './pages/Top10'
import '../src/styles/styles.css'
import '../src/styles/mediaQuery.css'
import backgroundImg from './assets/logo_fundal-01.png'

function App() {
  return (
    <div className="main-container">
      <img src={backgroundImg} alt="logo-fundal" className="logo-background" />
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
  )
}

export default App
