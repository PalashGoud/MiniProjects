import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
     <div className='flex flex-wrap w-[100%] bg-[#191916] '>
     <div className='flex items-center justify-center h-[45vh] w-[100%]'>
      <img className='h-[120%] w-[70%]' src={`../images/Home.png`}></img>
    
     </div>

      <div className='home-image h-[40vh] bg-cover relative w-[50%]  '>
        <img className='h-[100%] w-[100%]'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-e6iRhOUsxANyWpSnl5gOXslCi8wcXep7Yg&s'></img>
          <button  onClick={()=>{navigate('/calci')}} className='home-button duration-300 h-[40px] absolute top-[50%] left-[40%] w-[120px] bg-slate-400  bg-gradient-to-r from-purple-500 to-pink-500 '> IOS Calculator</button>
      </div>

      <div className='home-image h-[40vh] bg-cover relative w-[50%] bg-blue-300  '>
        <img className='h-[100%] w-[100%]'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIX4xK9MEBNx3ovIVuwRedXQzdwsPW-EDykg&s'></img>
        <button  onClick={()=>{navigate('/clock')}} className='home-button  h-[40px] absolute top-[50%] left-[40%] w-[120px] bg-slate-400  bg-gradient-to-r from-purple-500 to-pink-500 '> Clock</button>
      </div>
    
     
      <div className='home-image h-[40vh] bg-cover relative w-[50%]  '>
        <img className='h-[100%] w-[100%]'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsIa_jMRdv5Rf7z1b5TskE28XBo04g8Xndw&s'></img>
        <button onClick={()=>{navigate('/todo')}}  className='home-button  h-[40px] absolute top-[50%] left-[40%] w-[160px] bg-slate-400  bg-gradient-to-r from-pink-500 to-red-500  ' >To-Do-List</button>
      </div>
   
      <div className='home-image h-[40vh] bg-cover relative w-[50%] bg-blue-300  '>
        <img className='h-[100%] w-[100%]'  src='https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2021/09/google_calculator_android_12_my_1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1'></img>
        <button onClick={()=>{navigate('/newcalci')}}  className='home-button  absolute top-[50%] left-[40%]  h-[40px] w-[160px] bg-slate-400  bg-gradient-to-r from-pink-500 to-red-500  ' >ANDROID Calculator</button> 
      </div>

      
      <div className='home-image h-[40vh] bg-cover relative w-[50%] bg-blue-300  '>
        <img className='h-[100%] w-[100%]'  src='https://c4.wallpaperflare.com/wallpaper/1010/4/902/outside-the-box-wallpaper-preview.jpg'></img>
        <button onClick={()=>{navigate('/tic-tac-toe')}} className='home-button  absolute top-[50%] left-[40%] h-[40px] w-[120px] bg-slate-400 bg-gradient-to-r from-red-500 to-blue-500 ' >TIC TAC TOE</button>
      </div>

      <div className='home-image h-[40vh] bg-cover relative w-[50%] bg-blue-300  '>
        <img className='h-[100%] w-[100%]'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkr1iISc5p1ckIqCtEQEWvatBhAkhyzKqeA&s'></img>
        <button onClick={()=>{navigate('/snakenladder')}} className='home-button  absolute top-[50%] left-[40%] h-[50px] w-[120px] bg-slate-400 bg-gradient-to-r from-red-500 to-blue-500 ' >Snake And Ladder</button>
      </div>


      <div className='home-image h-[40vh] bg-cover relative w-[50%] bg-blue-300  '>
        <img className='h-[100%] w-[100%]'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbyx570XKFxpYL0AaOvmM_QSE4RBmCWsVpA&s'></img>
        <button onClick={()=>{navigate('/crousal')}} className='home-button  h-[40px] absolute top-[50%] left-[40%]  w-[120px] bg-slate-400   bg-gradient-to-r from-blue-500 to-yellow-400 ' >CROUSAL</button> 
      </div>
     
     
      <div className='home-image h-[40vh] bg-cover relative w-[50%] bg-blue-300  '>
        <img className='h-[100%] w-[100%]'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqpWYoy2r4Qs7V-6AhqbkOpDEOKJurKdRDQ&s'></img>
        
      <button onClick={()=>{navigate('/rockpaper')}} className='home-button  h-[50px] absolute top-[50%] left-[40%] w-[120px] bg-slate-400 bg-gradient-to-r from-blue-500 to-yellow-400 ' >Rock Paper Scissor</button>
      
      </div>
     
     
     
     
    
      
    </div>
  )
}

export default Home