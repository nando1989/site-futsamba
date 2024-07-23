import React from 'react'
import './styles.css'
import Futsamba from './images/futsamba-103.png'
import Logo from './images/logoFut.png'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Burger from '../../components/burger'
import Bio from '../biografia'
import Agenda from '../agenda'
import Contato from '../contato'
import Whatsapp from './Whatsapp.png'
import Facebook from './facebook.png'
import instagram from './instagram.png'


const Home = () => {
  return (
    <>
      <Burger />
      < div className='container-home'>
        <div className='img-logo'>
          <img className='logo' src={Logo} />
        </div>

        <div className='img-home'>
          <img className='home' src={Futsamba} />
        </div>
      </div >
      
      </>
)
}

export default Home
