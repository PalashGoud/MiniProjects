import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import CalculatorNew from './pages/CalculatorNew'
import TicTacToe from './pages/TicTacToe'
import Crousal from './pages/Crousal'
import RockPaper from './pages/RockPaper'
import Snakenladder from './pages/Snakenladder'
import Clock from './pages/Clock'
import Todo from './pages/Todo'
import Practice from './pages/Practice'
import Context1 from './pages/Context1'
import Mines from './pages/Mines'
import Guess from './pages/Guess'




function App() {
  return (
    <Context1>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/calci' element={<Calculator/>}></Route>
      <Route path='/newcalci' element={<CalculatorNew/>}></Route>
      <Route path='/tic-tac-toe' element={<TicTacToe/>} > </Route> 
      <Route path='/crousal'element={<Crousal/>} ></Route>   
      <Route path='/rockpaper'element={<RockPaper/>} ></Route> 
      <Route path='/snakenladder' element={<Snakenladder/>}></Route>
      <Route path='/clock' element={<Clock/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/practice' element={<Practice/>}></Route>
      <Route path='/mines' element={<Mines/>}></Route>
      <Route path='/number-guess' element={<Guess/>}></Route>
      
        </Routes>
    </BrowserRouter>
    </Context1>
    
  )
}

export default App