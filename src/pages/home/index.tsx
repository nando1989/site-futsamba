/* eslint-disable jsx-a11y/alt-text */

import './styles.css'
import Futsamba from './images/futsamba-103.png'
import Logo from './images/logoFut.png'
import Burger from '../../components/burger'
import Bio from '../biografia'



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
      <Bio/>
      
      </>
)
}

export default Home
