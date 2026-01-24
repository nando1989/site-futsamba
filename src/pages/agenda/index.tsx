import './styles.css';



const Agenda = () => {
  return (

    <div className='container-schedule'>
      <div className='container-title-schedule'>
        <h1><strong>Agenda</strong></h1>
      </div>

      <div className='container-date'>
        <div className='container-mes-ano'>
          <h3>Janeiro 2026</h3>
        </div>
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>25</h3>
            </div>
            <div className='container-month'><h3>JAN</h3></div>
          </div>
          <div className='container-local'>
            <h3>Guapimirim - Dom Kateco</h3>
            <button className='botaoComprar'>Comprar Ingresso</button>
          </div>
        </div>
      </div>

      <div className='container-date'>

        {/* linha */}
        <div className='container-border-botton-white'>
          <div className='container-border-botton-gray'>
            <div className='container-border-botton-orange'></div>
          </div>
        </div>


        <div className='container-mes-ano'>
          <h3>Fevereiro 2026</h3>
        </div>
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>7</h3>
            </div>
            <div className='container-month'><h3>FEV</h3></div>
          </div>
          <div className='container-local'>
            <h3>Guapimirim - Dom Kateco</h3>
            <button className='botaoComprar'>Comprar Ingresso</button>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>14</h3>
            </div>
            <div className='container-month'><h3>FEV</h3></div>
          </div>
          <div className='container-local'>
            <h3>Comary - Teresópolis</h3>
            <button className='botaoComprar'>Comprar Ingresso</button>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>14</h3>
            </div>
            <div className='container-month'><h3>FEV</h3></div>
          </div>
          <div className='container-local'>
            <h3>Parque Regadas - Teresópolis</h3>
            <button className='botaoComprar'>Entrada Franca</button>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>15</h3>
            </div>
            <div className='container-month'><h3>FEV</h3></div>
          </div>
          <div className='container-local'>
            <h3>São José </h3>
            <button className='botaoComprar'>Comprar Ingresso</button>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>16</h3>
            </div>
            <div className='container-month'><h3>FEV</h3></div>
          </div>
          <div className='container-local'>
            <h3>Feirinha do Alto - Teresópolis</h3>
            <button className='botaoComprar'>Entrada Franca</button>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>16</h3>
            </div>
            <div className='container-month'><h3>FEV</h3></div>
          </div>
          <div className='container-local'>
            <h3>Parque das Rosas - Teresópolis</h3>
            <button className='botaoComprar'>Entrada Franca</button>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>17</h3>
            </div>
            <div className='container-month'><h3>FEV</h3></div>
          </div>
          <div className='container-local'>
            <h3>Hotel Rio dos Frades - Teresópolis</h3>
            <button className='botaoComprar'>Entrada Franca</button>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className='container-adress'>
          <div className='container-day-month-adress'>
            <div className='container-day'>
              <h3>16</h3>
            </div>
            <div className='container-month'><h3>FEV</h3></div>
          </div>
          <div className='container-local'>
            <h3>Ginda Block Foliando - Teresópolis</h3>
            <button className='botaoComprar'>Entrada Franca</button>
          </div>
        </div>
      </div>






    </div>
  )
}

export default Agenda