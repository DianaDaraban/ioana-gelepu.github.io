import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.css'

export default function Navigation() {
  const [opacityNumExp, setOpacityNumExp] = useState(1)
  const [opacityNumTop, setOpacityNumTop] = useState(0)
  const [opacityNumTeam, setOpacityNumTeam] = useState(0)
  const [opacityNumStory, setOpacityNumStory] = useState(0)
  const [opacityNumTestimonials, setOpacityNumTestimonials] = useState(0)
  const [opacityNumProbono, setOpacityNumProbono] = useState(0)
  const [opacityNumAct, setOpacityNumAct] = useState(0)
  const [opacityNumContact, setOpacityNumContact] = useState(0)
  const opacityChangeExp = () => {
    setOpacityNumExp(1)
    setOpacityNumTop(0)
    setOpacityNumTeam(0)
    setOpacityNumStory(0)
    setOpacityNumTestimonials(0)
    setOpacityNumProbono(0)
    setOpacityNumAct(0)
    setOpacityNumContact(0)
  }
  const opacityChangeTop = () => {
    setOpacityNumTop(1)
    setOpacityNumExp(0)
    setOpacityNumTeam(0)
    setOpacityNumStory(0)
    setOpacityNumTestimonials(0)
    setOpacityNumProbono(0)
    setOpacityNumAct(0)
    setOpacityNumContact(0)
  }
  const opacityChangeTeam = () => {
    setOpacityNumTeam(1)
    setOpacityNumExp(0)
    setOpacityNumTop(0)
    setOpacityNumStory(0)
    setOpacityNumTestimonials(0)
    setOpacityNumProbono(0)
    setOpacityNumAct(0)
    setOpacityNumContact(0)
  }
  const opacityChangeStory = () => {
    setOpacityNumStory(1)
    setOpacityNumExp(0)
    setOpacityNumTop(0)
    setOpacityNumTeam(0)
    setOpacityNumTestimonials(0)
    setOpacityNumProbono(0)
    setOpacityNumAct(0)
    setOpacityNumContact(0)
  }
  const opacityChangeTestimonials = () => {
    setOpacityNumTestimonials(1)
    setOpacityNumExp(0)
    setOpacityNumTop(0)
    setOpacityNumTeam(0)
    setOpacityNumStory(0)
    setOpacityNumProbono(0)
    setOpacityNumAct(0)
    setOpacityNumContact(0)
  }
  const opacityChangeProbono = () => {
    setOpacityNumProbono(1)
    setOpacityNumExp(0)
    setOpacityNumTop(0)
    setOpacityNumTeam(0)
    setOpacityNumStory(0)
    setOpacityNumTestimonials(0)
    setOpacityNumAct(0)
    setOpacityNumContact(0)
  }
  const opacityChangeAct = () => {
    setOpacityNumAct(1)
    setOpacityNumExp(0)
    setOpacityNumTop(0)
    setOpacityNumTeam(0)
    setOpacityNumStory(0)
    setOpacityNumTestimonials(0)
    setOpacityNumProbono(0)
    setOpacityNumContact(0)
  }
  const opacityChangeContact = () => {
    setOpacityNumContact(1)
    setOpacityNumExp(0)
    setOpacityNumTop(0)
    setOpacityNumTeam(0)
    setOpacityNumStory(0)
    setOpacityNumTestimonials(0)
    setOpacityNumProbono(0)
    setOpacityNumAct(0)
  }
  return (
    <nav>
      <ul className="nav-list">
        <div className="nav-btn experience-btn">
          <div className="line-nav"></div>
          <li>
            <Link
              to="/"
              onClick={opacityChangeExp}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Experiență
              <span className="nav-subText">Domenii de activitate</span>
              {opacityNumTop == 0 &&
                opacityNumTeam == 0 &&
                opacityNumStory == 0 &&
                opacityNumTestimonials == 0 &&
                opacityNumProbono == 0 &&
                opacityNumAct == 0 &&
                opacityNumContact == 0 && (
                  <div
                    className="active-link"
                    style={{ opacity: opacityNumExp }}
                  ></div>
                )}
            </Link>
          </li>
        </div>
        <div className="nav-btn top10-btn">
          <div className="line-nav"></div>
          <li>
            <Link
              to="/top10"
              onClick={opacityChangeTop}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Top 10
              <span className="nav-subText">proiecte relevante</span>
            </Link>
            {opacityNumExp == 0 &&
              opacityNumTeam == 0 &&
              opacityNumStory == 0 &&
              opacityNumTestimonials == 0 &&
              opacityNumProbono == 0 &&
              opacityNumAct == 0 &&
              opacityNumContact == 0 && (
                <div
                  className="active-link"
                  style={{ opacity: opacityNumTop }}
                ></div>
              )}
          </li>
        </div>
        <div className="nav-btn team-btn">
          <div className="line-nav"></div>
          <li>
            <Link
              to="/echipa"
              onClick={opacityChangeTeam}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Echipa
            </Link>
            {opacityNumTop == 0 &&
              opacityNumExp == 0 &&
              opacityNumStory == 0 &&
              opacityNumTestimonials == 0 &&
              opacityNumProbono == 0 &&
              opacityNumAct == 0 &&
              opacityNumContact == 0 && (
                <div
                  className="active-link"
                  style={{ marginTop: '.8em', opacity: opacityNumTeam }}
                ></div>
              )}
          </li>
        </div>
        <div className="nav-btn story-btn">
          <div className="line-nav"></div>
          <li>
            <Link
              to="/povestea"
              onClick={opacityChangeStory}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Povestea
            </Link>
            {opacityNumTop == 0 &&
              opacityNumTeam == 0 &&
              opacityNumExp == 0 &&
              opacityNumTestimonials == 0 &&
              opacityNumProbono == 0 &&
              opacityNumAct == 0 &&
              opacityNumContact == 0 && (
                <div
                  className="active-link"
                  style={{ marginTop: '.8em', opacity: opacityNumStory }}
                ></div>
              )}
          </li>
        </div>
        <div className="nav-btn testimonials-btn">
          <div className="line-nav"></div>
          <li>
            <Link
              to="/testimoniale"
              onClick={opacityChangeTestimonials}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Testimoniale
            </Link>
            {opacityNumTop == 0 &&
              opacityNumTeam == 0 &&
              opacityNumStory == 0 &&
              opacityNumExp == 0 &&
              opacityNumProbono == 0 &&
              opacityNumAct == 0 &&
              opacityNumContact == 0 && (
                <div
                  className="active-link"
                  style={{ marginTop: '.8em', opacity: opacityNumTestimonials }}
                ></div>
              )}
          </li>
        </div>
        <div className="nav-btn proBono-btn">
          <div className="line-nav"></div>
          <li>
            <Link
              to="/probono"
              onClick={opacityChangeProbono}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Pro bono
            </Link>
            {opacityNumTop == 0 &&
              opacityNumTeam == 0 &&
              opacityNumStory == 0 &&
              opacityNumTestimonials == 0 &&
              opacityNumExp == 0 &&
              opacityNumAct == 0 &&
              opacityNumContact == 0 && (
                <div
                  className="active-link"
                  style={{ marginTop: '.8em', opacity: opacityNumProbono }}
                ></div>
              )}
          </li>
        </div>
        <div className="nav-btn activities-btn">
          <div className="line-nav"></div>
          <li>
            <Link
              to="/activitati"
              onClick={opacityChangeAct}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Activități
              <span className="nav-subText">notabile recente</span>
            </Link>
            {opacityNumTop == 0 &&
              opacityNumTeam == 0 &&
              opacityNumStory == 0 &&
              opacityNumTestimonials == 0 &&
              opacityNumProbono == 0 &&
              opacityNumExp == 0 &&
              opacityNumContact == 0 && (
                <div
                  className="active-link"
                  style={{ opacity: opacityNumAct }}
                ></div>
              )}
          </li>
        </div>
        <div className="nav-btn contact-btn">
          <div className="line-nav"></div>
          <li>
            <Link
              to="/contact"
              onClick={opacityChangeContact}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Contact
            </Link>
            {opacityNumTop == 0 &&
              opacityNumTeam == 0 &&
              opacityNumStory == 0 &&
              opacityNumTestimonials == 0 &&
              opacityNumProbono == 0 &&
              opacityNumAct == 0 &&
              opacityNumExp == 0 && (
                <div
                  className="active-link"
                  style={{ marginTop: '.8em', opacity: opacityNumContact }}
                ></div>
              )}
          </li>
          <div className="line-nav"></div>
        </div>
      </ul>
    </nav>
  )
}
