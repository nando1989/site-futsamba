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
        <Link to="https://drive.google.com/drive/folders/16PfLi2XPMJBD7mrSEQ1iJZbJqRiJdGzo?usp=sharing" className='list'><li>Media Kit</li></Link>
        <Link to='https://wa.me/5521998687609?text=OL%C3%81!' className='list'><li>Contrate</li></Link>
        <Link to='https://drive.google.com/drive/folders/1br0ur3mPxbNJEobj-_IVaMLxQR4V-V53?usp=sharing' className='list'><li>Fotos</li></Link>

      </div>
    </div>
  )
}

export default Burger