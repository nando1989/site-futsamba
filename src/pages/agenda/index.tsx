import './styles.css';



const Agenda = () => {
  return (

    <div className='container-schedule'>

      <div className='container-title-schedule'>
        <h1><strong>Agenda</strong></h1>
      </div>

      <div className='container-mes-ano'>
        <h3>Agosto 2024</h3>
      </div>

      <div className='container-border-botton-white'>
        <div className='container-border-botton-gray'>
          <div className='container-border-botton-orange'></div>
        </div>
      </div>

      <div className='container-adress'>
        <div className='container-day-month-adress'>
          <div className='container-day'>
            <h3>25</h3>
          </div>
          <div className='container-month'><h3>AGO</h3></div>
        </div>
        <div className='container-local'>
          <h3>Panela do Futsamba</h3>
          <button className='botaoComprar'>Comprar Ingresso</button>
        </div>
      </div>

      <div className='container-mes-ano'>
        <h3>setembro 2024</h3>
      </div>

      <div className='container-border-botton-white'>
        <div className='container-border-botton-gray'>
          <div className='container-border-botton-orange'></div>
        </div>
      </div>

      <div className='container-adress'>
        <div className='container-day-month-adress'>
          <div className='container-day'>
            <h3>04</h3>
          </div>
          <div className='container-month'><h3>SET</h3></div>

        </div>
        <div className='container-local'>
          <h3>Sesc/Teresópolis</h3>
          <button className='botaoComprar'>Entrada franca</button>
        </div>
      </div>

      <div className='container-mes-ano'>
        <h3>Outubro 2024</h3>
      </div>

      <div className='container-border-botton-white'>
        <div className='container-border-botton-gray'>
          <div className='container-border-botton-orange'></div>
        </div>
      </div>

      <div className='container-adress'>
        <div className='container-day-month-adress'>
          <div className='container-day'><h3>05</h3></div>
          <div className='container-month'><h3>OUT</h3></div>
        </div>
        <div className='container-local'>
          <h3>Paradise/Teresópolis</h3>
          <button className='botaoComprar'>Comprar Ingresso</button>
        </div>
      </div>

    </div>

  )
}

export default Agenda