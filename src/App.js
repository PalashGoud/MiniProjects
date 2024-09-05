import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import CalculatorNew from './pages/CalculatorNew'
import TicTacToe from './pages/TicTacToe'
import Crousal from './pages/Crousal'
import Practice from './pages/Practice'
import Snakenladder from './pages/Snakenladder'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/calci' element={<Calculator/>}></Route>
      <Route path='/newcalci' element={<CalculatorNew/>}></Route>
      <Route path='/tic-tac-toe' element={<TicTacToe/>} > </Route> 
      <Route path='/crousal'element={<Crousal/>} ></Route>   
      <Route path='/practice'element={<Practice/>} ></Route> 
      <Route path='/snakenladder' element={<Snakenladder/>}></Route>
      
        </Routes>
    </BrowserRouter>
  )
}

export default App