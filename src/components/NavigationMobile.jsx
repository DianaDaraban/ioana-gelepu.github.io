import React, { useState } from 'react'
import '../styles/navigation.css'
import BurgerMenu from './BurgerMenu'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function NavigationMobile() {
  const [opacityNumExp, setOpacityNumExp] = useState(1)
  const [opacityNumTop, setOpacityNumTop] = useState(0)
  const [opacityNumTeam, setOpacityNumTeam] = useState(0)
  const [opacityNumStory, setOpacityNumStory] = useState(0)
  const [opacityNumTestimonials, setOpacityNumTestimonials] = useState(0)
  const [opacityNumProbono, setOpacityNumProbono] = useState(0)
  const [opacityNumAct, setOpacityNumAct] = useState(0)
  const [opacityNumContact, setOpacityNumContact] = useState(0)
  const [isClicked, setIsClicked] = useState(true)
  const [hiddenClass, setHiddenClass] = useState('hidden')
  const [burger, setBurger] = useState('burger-bar unclicked')
  const [menu, setMenu] = useState('menu hidden')

  const verifyClick = (item) => {
    setIsClicked(item)
    if (isClicked) {
      setHiddenClass('visible')
    } else {
      setHiddenClass('hidden')
    }
  }

  const toggleMenu = () => {
    setHiddenClass('hidden')
    if (burger == 'burger-bar clicked') {
      setBurger('burger-bar unclicked')
    }
    if (menu == 'menu visible') {
      setMenu('menu hidden')
    }
  }

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
    <>
      <BurgerMenu
        verifyClick={verifyClick}
        toggleMenu={toggleMenu}
        burger={burger}
        menu={menu}
      />
      <div
        className="nav2"
        style={{
          visibility: hiddenClass,
        }}
      >
        <ul className="nav-list2">
          <div className="nav-btn2 experience-btn2">
            <div className="line-nav2"></div>
            <li>
              <HashLink
                to="ExperienceMobile.jsx/#experience"
                onClick={() => {
                  opacityChangeExp()
                  toggleMenu()
                }}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                Experiență. Domenii de activitate
                {opacityNumTop == 0 &&
                  opacityNumTeam == 0 &&
                  opacityNumStory == 0 &&
                  opacityNumTestimonials == 0 &&
                  opacityNumProbono == 0 &&
                  opacityNumAct == 0 &&
                  opacityNumContact == 0 && (
                    <div
                      className="active-link2"
                      style={{ opacity: opacityNumExp }}
                    ></div>
                  )}
              </HashLink>
            </li>
          </div>
          <div className="nav-btn2 top10-btn2">
            <div className="line-nav2"></div>
            <li>
              <HashLink
                to="Top10Mobile.jsx/#top10"
                onClick={() => {
                  opacityChangeTop()
                  toggleMenu()
                }}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                Top 10 proiecte relevante
              </HashLink>
              {opacityNumExp == 0 &&
                opacityNumTeam == 0 &&
                opacityNumStory == 0 &&
                opacityNumTestimonials == 0 &&
                opacityNumProbono == 0 &&
                opacityNumAct == 0 &&
                opacityNumContact == 0 && (
                  <div
                    className="active-link2"
                    style={{ opacity: opacityNumTop }}
                  ></div>
                )}
            </li>
          </div>
          <div className="nav-btn2 team-btn2">
            <div className="line-nav2"></div>
            <li>
              <HashLink
                to="TeamMobile.jsx/#team"
                onClick={() => {
                  opacityChangeTeam()
                  toggleMenu()
                }}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                Echipa
              </HashLink>
              {opacityNumTop == 0 &&
                opacityNumExp == 0 &&
                opacityNumStory == 0 &&
                opacityNumTestimonials == 0 &&
                opacityNumProbono == 0 &&
                opacityNumAct == 0 &&
                opacityNumContact == 0 && (
                  <div
                    className="active-link2"
                    style={{ marginTop: '.8em', opacity: opacityNumTeam }}
                  ></div>
                )}
            </li>
          </div>
          <div className="nav-btn2 story-btn2">
            <div className="line-nav2"></div>
            <li>
              <HashLink
                to="StoryMobile.jsx/#story"
                onClick={() => {
                  opacityChangeStory()
                  toggleMenu()
                }}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                Povestea
              </HashLink>
              {opacityNumTop == 0 &&
                opacityNumTeam == 0 &&
                opacityNumExp == 0 &&
                opacityNumTestimonials == 0 &&
                opacityNumProbono == 0 &&
                opacityNumAct == 0 &&
                opacityNumContact == 0 && (
                  <div
                    className="active-link2"
                    style={{ marginTop: '.8em', opacity: opacityNumStory }}
                  ></div>
                )}
            </li>
          </div>
          <div className="nav-btn2 testimonials-btn2">
            <div className="line-nav2"></div>
            <li>
              <HashLink
                to="TestimonialsMobile.jsx/#testimonials"
                onClick={() => {
                  opacityChangeTestimonials()
                  toggleMenu()
                }}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                Testimoniale
              </HashLink>
              {opacityNumTop == 0 &&
                opacityNumTeam == 0 &&
                opacityNumStory == 0 &&
                opacityNumExp == 0 &&
                opacityNumProbono == 0 &&
                opacityNumAct == 0 &&
                opacityNumContact == 0 && (
                  <div
                    className="active-link2"
                    style={{
                      marginTop: '.8em',
                      opacity: opacityNumTestimonials,
                    }}
                  ></div>
                )}
            </li>
          </div>
          <div className="nav-btn2 proBono-btn2">
            <div className="line-nav2"></div>
            <li>
              <HashLink
                to="ProbonoMobile.jsx/#probono"
                onClick={() => {
                  opacityChangeProbono()
                  toggleMenu()
                }}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                Pro bono
              </HashLink>
              {opacityNumTop == 0 &&
                opacityNumTeam == 0 &&
                opacityNumStory == 0 &&
                opacityNumTestimonials == 0 &&
                opacityNumExp == 0 &&
                opacityNumAct == 0 &&
                opacityNumContact == 0 && (
                  <div
                    className="active-link2"
                    style={{ marginTop: '.8em', opacity: opacityNumProbono }}
                  ></div>
                )}
            </li>
          </div>
          <div className="nav-btn2 activities-btn2">
            <div className="line-nav2"></div>
            <li>
              <HashLink
                to="ActivitiesMobile.jsx/#activities"
                onClick={() => {
                  opacityChangeAct()
                  toggleMenu()
                }}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                Activități notabile recente
              </HashLink>
              {opacityNumTop == 0 &&
                opacityNumTeam == 0 &&
                opacityNumStory == 0 &&
                opacityNumTestimonials == 0 &&
                opacityNumProbono == 0 &&
                opacityNumExp == 0 &&
                opacityNumContact == 0 && (
                  <div
                    className="active-link2"
                    style={{ opacity: opacityNumAct }}
                  ></div>
                )}
            </li>
          </div>
          <div className="nav-btn2 contact-btn2">
            <div className="line-nav2"></div>
            <li>
              <HashLink
                to="ContactMobile.jsx/#contact"
                onClick={() => {
                  opacityChangeContact()
                  toggleMenu()
                }}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 300,
                }}
              >
                Contact
              </HashLink>
              {opacityNumTop == 0 &&
                opacityNumTeam == 0 &&
                opacityNumStory == 0 &&
                opacityNumTestimonials == 0 &&
                opacityNumProbono == 0 &&
                opacityNumAct == 0 &&
                opacityNumExp == 0 && (
                  <div
                    className="active-link2"
                    style={{ marginTop: '.8em', opacity: opacityNumContact }}
                  ></div>
                )}
            </li>
            <div className="line-nav2"></div>
          </div>
        </ul>
      </div>
    </>
  )
}
