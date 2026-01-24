/* eslint-disable jsx-a11y/alt-text */

import './styles.css'
import Whatsapp from './images/Whatsapp.png'
import Facebook from './images/facebook.png'
import instagram from './images/instagram.png'


const Contato = () => {
  return (
      <div className='container-contact'>
        <div className='date'>

          <div className='icons'>
            <div className='icon-contato'> <a href="https://wa.me/5521998687609?text=OL%C3%81!"> <img className='whatsapp' src={Whatsapp} alt="Whatsapp" /> </a></div>
            <div className='icon-contato'> <a href="https://www.instagram.com/banda5estacoestere/"> <img className='whatsapp' src={Facebook} alt="Whatsapp" /> </a></div>
            <div className='icon-contato'> <a href="https://www.instagram.com/banda5estacoestere/"> <img className='whatsapp' src={instagram} alt="Whatsapp" /> </a></div>
          </div>


        </div>
      </div>
    
  )
}

export default Contato