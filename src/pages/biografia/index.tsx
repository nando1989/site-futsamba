import './styles.css'
import PersonCard from '../../components/personCard'
import Nando from '../home/images/nando.webp'
import Edy from '../home/images/edy.webp'
import Duda from '../home/images/duda.webp'
import Andre from '../home/images/andre.webp'
import Marcos from '../home/images/marcos.webp'
import Marquinhos from '../home/images/Marquinhos.webp'

const Bio = () => {
  return (
    <div className='container-bio'>
      <div className='container-biograph'>
        <div className='container-title'>
          <h1 className='titleBio'>Nossa história</h1>
        </div>

        <div className='container-text'>
          <p>Com 35 anos de estrada, a banda 5 Estações é sinônimo de experiência, 
            energia e pista cheia. Ao longo de décadas, construiu uma trajetória sólida levando música de qualidade 
            para festas, eventos, casas de show e celebrações inesquecíveis.
            O repertório é um verdadeiro passeio pelos grandes sucessos de todas as épocas — dos clássicos que todo
            mundo canta junto aos hits atuais que ninguém consegue ficar parado. 
            Pop, rock, flashback, dance, nacional e internacional: aqui o show é completo, dinâmico e feito 
            pra agradar todas as gerações.<br></br>
            Mais do que tocar músicas, a <strong> 5 Estações</strong> cria experiências. Cada apresentação é pensada para envolver o 
            público, levantar a galera e transformar qualquer evento em um momento memorável.
            Se a ideia é animação do começo ao fim, a trilha sonora já tem nome.
            5 Estações. Aperta o play e deixa acontecer.ão. </p>
        </div>


        <div className='container-cards'>
           <PersonCard
            imgSrc={Marquinhos}
            name='Marquinho Barboza'
            instagram='@marquinhobarboza5
'
          />
         
         <PersonCard
            imgSrc={Duda}
            name='Eduardo Mendonça'
            instagram='@eduardopercussa
'
          />
          <PersonCard
            imgSrc={Edy}
            name='Ed Galdino'
            instagram='@edgaldino'
          />
          <PersonCard
            imgSrc={Marcos}
            name='Marcos Brito'
            instagram='@marcosbritogt'
          />
          <PersonCard
            imgSrc={Andre}
            name='André Souza'
            instagram='@andre_tix'
          />
           <PersonCard
            imgSrc={Nando}
            name='Fernando de Souza'
            instagram='@Nandobaixista' />
        </div>



      </div>

    </div>


  )
}

export default Bio