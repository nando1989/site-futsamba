import './styles.css'
import PersonCard from '../../components/personCard'
import ImgCharles from '../../assets/img/charles.jpg'
import ImgRoma from '../../assets/img/roma.jpg'
import ImgRenan from '../../assets/img/renan.jpg'
import ImgLucas from '../../assets/img/lucas.jpg'
import ImgRodolfo from '../../assets/img/rodolfo.jpg'


const Bio = () => {
  return (
    <div className='container-bio'>
      <div className='container-biograph'>
          <div className='container-title'>
            <h1>Nossa história</h1>
          </div>

          <div className='container-text'>
            <p><strong> FUTSAMBA </strong>é um grupo de samba e pagode originário da
              cidade de Teresópolis. Com uma reputação sólida e uma base de fãs
              fiel, somos conhecidos por nossas apresentações energéticas e
              envolventes. Nossa paixão pela música e nosso amor pela cultura do
              samba nos impulsionam a criar momentos inesquecíveis em cada
              show.
              Formada por um grupo de músicos talentosos e dedicados, <b></b>
              <strong>FUTSAMBA</strong> é uma das bandas mais populares de Teresópolis e região.
              Com anos de experiência na cena musical, cada membro traz sua
              expertise e personalidade única para o palco, criando uma combinação
              perfeita de ritmo, harmonia e emoção.</p>
          </div>


          <div className='container-cards'>
            <PersonCard
              imgSrc={ImgCharles}
              name='Charles Silvestre'
              instagram='@charlesrodrigues' />
            <PersonCard
              imgSrc={ImgRoma}
              name='Roma junior'
              instagram='@romajunioor'
            />
            <PersonCard
              imgSrc={ImgRenan}
              name='Renan Pereira'
              instagram='@renanfutsamba'
            />
            <PersonCard
              imgSrc={ImgLucas}
              name='Lucas Zimbrão'
              instagram='@lucaszimbrao'
            />
            <PersonCard
              imgSrc={ImgRodolfo}
              name='Rodolfo Macário'
              instagram='@rodolphomacario3'
            />
          </div>
       


      </div>
      
      </div>

      
      )
}

      export default Bio