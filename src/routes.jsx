import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Bio from './pages/biografia'
import Agenda from './pages/agenda'
import Contato from './pages/contato'

function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/bio' element={<Bio/>}/> 
        <Route path='/agenda' element={<Agenda/>}/> 
        <Route path='/contato' element={<Contato/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
