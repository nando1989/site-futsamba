import React from 'react';
import './styles.css';

import Burger from '../../components/burger';

const Agenda = () => {
  return (
    <>
    <Burger />
      <div className='container-schedule'>
        <h1>Agenda</h1>
        <div className='container-date'>
          <div className='date'><h2>22/06</h2></div>
          <div className='local'><h3>Chopbol - Teresópolis (RJ) </h3></div>
          <div className='date'><h2>22/06</h2></div>
          <div className='local'><h3>Chopbol - Teresópolis (RJ) </h3></div>
          <div className='date'><h2>22/06</h2></div>
          <div className='local'><h3>Chopbol - Teresópolis (RJ) </h3></div>
        
        
        </div>
      </div>
      
    </>
  )
}

export default Agenda