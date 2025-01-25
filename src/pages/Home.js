import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-wrap w-full bg-[#191916] p-4">
      <div className="flex items-center justify-center h-[45vh] w-full">
        <img className="h-[120%] w-[70%] md:h-auto md:w-[40%]" src={`../images/Home.png`} alt="Home" />
      </div>

      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://c4.wallpaperflare.com/wallpaper/1010/4/902/outside-the-box-wallpaper-preview.jpg" alt="Tic Tac Toe" />
        <button
          onClick={() => navigate('/tic-tac-toe')}
          className="home-button h-10 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-md shadow-md"
        >
          TIC TAC TOE
        </button>
      </div>


      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-e6iRhOUsxANyWpSnl5gOXslCi8wcXep7Yg&s" alt="IOS Calculator" />
        <button
          onClick={() => navigate('/calci')}
          className="home-button duration-300 h-10 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md"
        >
          IOS Calculator
        </button>
      </div>
       
      
      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqpWYoy2r4Qs7V-6AhqbkOpDEOKJurKdRDQ&s" alt="Rock Paper Scissors" />
        <button
          onClick={() => navigate('/rockpaper')}
          className="home-button h-12 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-semibold rounded-md shadow-md"
        >
          Rock Paper Scissor
        </button>
      </div>


      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIX4xK9MEBNx3ovIVuwRedXQzdwsPW-EDykg&s" alt="Clock" />
        <button
          onClick={() => navigate('/clock')}
          className="home-button h-10 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md"
        >
          Clock
        </button>
      </div>


      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdP-WX17onopFNfoszZCr5T6177DZrV2OL7w&s" alt="Clock" />
        <button
          onClick={() => navigate('/mines')}
          className="home-button h-10 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md"
        >
          Mines
        </button>
      </div>

      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsIa_jMRdv5Rf7z1b5TskE28XBo04g8Xndw&s" alt="To-Do List" />
        <button
          onClick={() => navigate('/todo')}
          className="home-button h-10 w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-md shadow-md"
        >
          To-Do-List
        </button>
      </div>

      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2021/09/google_calculator_android_12_my_1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" alt="Android Calculator" />
        <button
          onClick={() => navigate('/newcalci')}
          className="home-button h-10 w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-md shadow-md"
        >
          ANDROID Calculator
        </button>
      </div>

      

      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkr1iISc5p1ckIqCtEQEWvatBhAkhyzKqeA&s" alt="Snake And Ladder" />
        <button
          onClick={() => navigate('/snakenladder')}
          className="home-button h-12 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-md shadow-md"
        >
          Snake And Ladder
        </button>
      </div>

      <div className="home-image h-[40vh] relative w-full md:w-1/2 p-2">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbyx570XKFxpYL0AaOvmM_QSE4RBmCWsVpA&s" alt="Carousel" />
        <button
          onClick={() => navigate('/crousal')}
          className="home-button h-10 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-semibold rounded-md shadow-md"
        >
          CROUSAL
        </button>
      </div>

    </div>
  );
}

export default Home;
