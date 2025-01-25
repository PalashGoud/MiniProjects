import React, { useState, useEffect } from "react";
import Bomb from "../images/bomb.jpg"; // Replace with your actual bomb image path.
import Tick from "../images/tick.png"; // Add a green tick image for correct clicks.
import bombExplodeAudio from "../audio/bomb_explode.mp3"; // Import the bomb explode audio file.
import minesAudio from "../audio/mine_audio.mp3"; // Import the mines audio file for tick click.

function Mines() {
  const [filledCells, setFilledCells] = useState([]); // Tracks clicked cells.
  const [gameOver, setGameOver] = useState(false); // Tracks game state.
  const [money, setMoney] = useState(1000); // Tracks total money won (starting at 1000).
  const [bombs, setBombs] = useState([]); // Stores the bomb locations
  const [clickedBomb, setClickedBomb] = useState(null); // To track the clicked bomb cell
  const [gridSize, setGridSize] = useState(16); // Default 16 cells (4x4 grid)
  const [userBid, setUserBid] = useState(0); // The money the user bids to play

  const [bombCount, setBombCount] = useState(5); // Default bomb count
  const [startGame, setStartGame] = useState(false); // To control when the game starts
  const [correctTicks, setCorrectTicks] = useState(0); // To track the number of correct ticks
  const [cashOutVisible, setCashOutVisible] = useState(false); // To control Cash Out button visibility

  // Function to generate bomb locations
  const generateBombs = () => {
    const bombIndexes = new Set();
    while (bombIndexes.size < bombCount) {
      const randomIndex = Math.floor(Math.random() * gridSize);
      bombIndexes.add(randomIndex);
    }
    return [...bombIndexes];
  };

  // Play the bomb explosion sound
  const playBombExplosion = () => {
    const audio = new Audio(bombExplodeAudio); // Create an Audio object
    audio.play(); // Play the audio
  };

  // Play the mines audio for tick
  const playMinesAudio = () => {
    const audio = new Audio(minesAudio); // Create an Audio object
    audio.play(); // Play the audio
  };

  const handleClick = (index) => {
    if (gameOver || filledCells.some((cell) => cell.index === index)) return; // Prevent extra clicks.

    const isBomb = bombs.includes(index); // Check if the clicked cell is a bomb
    const newCell = { index, isBomb };

    setFilledCells([...filledCells, newCell]);

    if (isBomb) {
      setClickedBomb(index); // Store the bomb index
      setGameOver(true); // End the game immediately
      setMoney((prev) => prev - userBid); // Deduct the bid amount from user's money
      playBombExplosion(); // Play bomb explosion sound
    } else {
      const rewardPerTick = userBid * bombCount; // Calculate reward for each tick
      setMoney((prev) => prev + rewardPerTick); // Add the calculated reward for the tick
      setCorrectTicks((prev) => prev + 1); // Increment correct tick count
      playMinesAudio(); // Play mines audio for correct tick click

      // Show the Cash Out button after the first tick click
      if (correctTicks === 0) {
        setCashOutVisible(true); // Make Cash Out visible once a tick is clicked
      }
    }
  };

  const resetGame = () => {
    const bombIndexes = generateBombs(); // Generate bomb locations for each new game
    setBombs(bombIndexes);
    setFilledCells([]); // Reset clicked cells
    setGameOver(false); // Reset game over state
    setClickedBomb(null); // Reset clicked bomb on game reset
    setStartGame(false); // Reset game state
    setCorrectTicks(0); // Reset correct ticks count
    setCashOutVisible(false); // Hide Cash Out button when the game resets
  };

  const handleStartGame = () => {
    // Validate the bid and bomb count
    if (userBid <= 0) {
      alert("Please place a valid bid greater than 0!");
      return;
    }
    if (userBid > money) {
      alert("Your bid exceeds your available money!");
      return;
    }
    if (bombCount <= 0 || bombCount >= gridSize) {
      alert("Bombs must be between 1 and " + (gridSize - 1));
      return;
    }

    setBombs(generateBombs()); // Generate bombs based on selected count
    setStartGame(true); // Game can now start or restart
  };

  useEffect(() => {
    if (startGame) {
      resetGame(); // Reset the game when starting
    }
  }, [startGame]);

  // Handle the "Cash Out" button click
  const handleCashOut = () => {
    const reward = correctTicks * (userBid * bombCount); // Reward is based on ticks and bomb count
    setMoney((prev) => prev + reward); // Add money based on correct ticks
    resetGame(); // Reset the game after cashing out
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#192c38]">
      <div className="flex flex-row w-[900px] justify-center items-start space-x-10">
        {/* Left Side - Controls */}
        <div className="flex flex-col items-start bg-[#0d212c] p-6 rounded-xl shadow-xl w-[300px]">
          {/* Money and Bet Section */}
          <h2 className="text-2xl text-white font-bold mb-4">Mines Casino</h2>
          <p className="text-lg text-white mb-4">
            Current Money: <span className="text-green-400">₹{money}</span>
          </p>
          <div className="mb-4">
            <label className="text-white text-lg">Bombs:</label>
            <input
              type="number"
              value={bombCount}
              onChange={(e) => setBombCount(Number(e.target.value))}
              min="1"
              max={gridSize - 1}
              className="bg-[#2e4452] text-white p-2 rounded-lg mx-2"
            />
          </div>
          <div className="mb-4">
            <label className="text-white text-lg">Place your Bid (₹):</label>
            <input
              type="number"
              value={userBid}
              onChange={(e) => setUserBid(Number(e.target.value))}
              min="1"
              max={money}
              className="bg-[#2e4452] text-white p-2 rounded-lg mx-2"
            />
          </div>
          <button
            onClick={handleStartGame}
            className="w-full mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Bet & Start Game
          </button>
        </div>

        {/* Right Side - Game Grid */}
        <div className="flex justify-center items-center bg-[#0d212c] p-6 rounded-xl shadow-xl w-[600px] relative">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: gridSize }, (_, index) => {
              const cell = filledCells.find((cell) => cell.index === index);
              const isBomb = bombs.includes(index); // Check if the cell is a bomb
              const isClickedBomb = clickedBomb === index; // Check if this is the clicked bomb
              const isTick = !isBomb && cell; // If the cell is not a bomb and is filled, it's a tick.

              return (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`w-[100px] h-[100px] bg-black rounded-[12px] relative overflow-hidden cursor-pointer ${cell && "pointer-events-none"}`}
                  style={{
                    filter:
                      gameOver && !isClickedBomb && !isTick
                        ? "brightness(0.3)" // Dim all non-clicked bombs, excluding ticks
                        : "none",
                  }}
                >
                  {/* Background overlay */}
                  <div
                    className={`w-full h-full bg-[#2e4452] rounded-[12px] absolute ${cell ? "check" : ""}`}></div>
                  {/* Bomb or Tick */}
                  {cell && (
                    <img
                      src={isBomb ? Bomb : Tick}
                      alt={isBomb ? "Bomb" : "Tick"}
                      className={`absolute inset-0 w-full h-full object-contain transition-transform duration-300 ease-linear ${isBomb ? "bomb" : "tick"}`}
                    />
                  )}
                  {/* Show Bombs if game is over */}
                  {gameOver && isBomb && (
                    <img
                      src={Bomb}
                      alt="Bomb"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  )}
                  {/* Show Tick after correct choices */}
                  {isTick && !isBomb && (
                    <img
                      src={Tick}
                      alt="Tick"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Cash Out Button */}
          {cashOutVisible && !gameOver && (
            <button
              onClick={handleCashOut}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-6 py-2 rounded-lg"
            >
              Cash Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mines;
