import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <>
      <div className='navbar-container'>

        <div className={`navbar-container  ${showMenu ? 'show' : ''}`}> <ul>
          <Link to='/Home' className='list'><li>Home</li></Link>
          <Link to='/Bio' className='list'><li>Biografia</li></Link>
          <Link to='/Agenda' className='list'><li>Agenda</li></Link>
          <Link to='/' className='list'><li></li>Home</Link>
        </ul></div>

        <div
          className='navbar-container-social'
        
        >
          <div className="navbar-hamburguer">

            <div
              onClick={toggleMenu}
              className='menu-button'>
                <span className="linha"></span>
                <span className="linha"></span>
                <span className="linha"></span>
                <span className="linha"></span>
              </div>


            </div>

          </div>
        </div>
     

    </>
  )
}



export default Navbar