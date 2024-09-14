import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center gap-6 w-[100%] h-[30vh]'>

      <button  onClick={()=>{navigate('/calci')}} className='h-[40px] w-[120px] bg-slate-400  bg-gradient-to-r from-purple-500 to-pink-500 '> IOS Calculator</button>
      <button onClick={()=>{navigate('/newcalci')}}  className='h-[40px] w-[160px] bg-slate-400  bg-gradient-to-r from-pink-500 to-red-500  ' >ANDROID Calculator</button>
      <button onClick={()=>{navigate('/tic-tac-toe')}} className='h-[40px] w-[120px] bg-slate-400 bg-gradient-to-r from-red-500 to-blue-500 ' >TIC TAC TOE</button>
      <button onClick={()=>{navigate('/crousal')}} className='h-[40px] w-[120px] bg-slate-400     bg-gradient-to-r from-blue-500 to-yellow-400 ' >CROUSAL</button>
      <button onClick={()=>{navigate('/practice')}} className='h-[40px] w-[120px] bg-slate-400     bg-gradient-to-r from-blue-500 to-yellow-400 ' >practice</button>
      <button onClick={()=>{navigate('/snakenladder')}} className='h-[50px] w-[120px] bg-slate-400 bg-gradient-to-r from-red-500 to-blue-500 ' >Snake And Ladder</button>
      <button  onClick={()=>{navigate('/clock')}} className='h-[40px] w-[120px] bg-slate-400  bg-gradient-to-r from-purple-500 to-pink-500 '> Clock</button>
      <button onClick={()=>{navigate('/todo')}}  className='h-[40px] w-[160px] bg-slate-400  bg-gradient-to-r from-pink-500 to-red-500  ' >ToDo</button>
    </div>
  )
}

export default Home