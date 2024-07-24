import React, { useState } from "react";
import './styles.css'
import { Link } from 'react-router-dom'

const Burger = () => {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div style={{ width: '100%', height: '4vh', position: "absolute" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </nav>

      <div className={menu_class}>
        <Link to="/" className='list'><li>Home</li></Link>
        <Link to='/Bio' className='list'><li>Biografia</li></Link>
        <Link to='/Agenda' className='list'><li>Agenda</li></Link>
        <Link to='/contato' className='list'><li></li>Contato</Link>
      </div>
    </div>
  )
}

export default Burger