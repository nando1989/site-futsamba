/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Futsamba2 from './images/futsamba-99.png'
import Burger from '../../components/burger'
import './styles.css'
import Whatsapp from './images/Whatsapp.png'
import Facebook from './images/facebook.png'
import instagram from './images/instagram.png'


const Contato = () => {
  return (
    <div>
      <div className='container-contact'>
        <div className='date'>
          
          <div className='icons'>
            <div className='icon-contato'> <a href="https://www.linkedin.com/in/fernando-de-souza-84b0652a6/"> <img className='whatsapp' src={Whatsapp} alt="Whatsapp" /> </a></div>
            <div className='icon-contato'> <a href="https://www.linkedin.com/in/fernando-de-souza-84b0652a6/"> <img className='whatsapp' src={Facebook} alt="Whatsapp" /> </a></div>
            <div className='icon-contato'> <a href="https://www.linkedin.com/in/fernando-de-souza-84b0652a6/"> <img className='whatsapp' src={instagram} alt="Whatsapp" /> </a></div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contato