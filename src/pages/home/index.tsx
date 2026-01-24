/* eslint-disable jsx-a11y/alt-text */
import './styles.css'
import Logo from '../../assets/img/nossalogo.webp'
import Burger from '../../components/burger'
import Bio from '../biografia'
import Agenda from '../agenda'
import Contato from '../contato'



const Home = () => {
  return (
    <>
      <Burger />
      < div className='container-home'>
        <div className='img-logo'>
          <img className='logo' src={Logo} alt='logo'/>
        </div>

      </div >
      <Bio/>
      <Agenda/>
      <Contato/>
      
      
    </>
  )
}

export default Home
