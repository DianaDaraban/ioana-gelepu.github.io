import React, { useState } from 'react'
import '../styles/burgerMenu.css'

export default function BurgerMenu({ toggleMenu, verifyClick, menu, burger }) {
  const [burger_class, setBurgerClass] = useState(burger)
  const [menu_class, setMenuClass] = useState(menu)
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  //   toggle burger menu change

  console.log(burger_class, menu_class)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible')
    } else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <div className="burger-container">
        <div
          className="burger-menu"
          onClick={() => {
            updateMenu()
            // toggleMenu(isMenuClicked)
            verifyClick(isMenuClicked)
          }}
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
      <div className={menu_class}></div>
    </>
  )
}
