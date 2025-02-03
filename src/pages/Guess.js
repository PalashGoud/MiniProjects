import React, { useState, useRef } from "react";

function Guess() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);
  const [correctNumber, setCorrectNumber] = useState(Math.round(Math.random() * 100));
  const [isStartGameDisabled, setIsStartGameDisabled] = useState(true);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  // Creating references for audio elements
  const wrongSound = useRef(null);
  const winSound = useRef(null);
  const newGameSound = useRef(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = parseInt(userInput);
    let updatedGuesses = [...allGuesses, input];

    if (input > correctNumber) {
      setResult("Too high");
      // Play wrong sound
      wrongSound.current.play();
    } else if (input < correctNumber) {
      setResult("Too low");
      // Play wrong sound
      wrongSound.current.play();
    } else {
      setResult("You win!");
      setIsStartGameDisabled(false);
      setIsSubmitDisabled(true);
      // Play win sound
      winSound.current.play();
    }

    setAllGuesses(updatedGuesses);
    setUserInput(""); // Clear input field
  };

  const handleStartGame = () => {
    setCorrectNumber(Math.round(Math.random() * 100));
    setAllGuesses([]);
    setResult("");
    setIsStartGameDisabled(true);
    setIsSubmitDisabled(false);
    // Play new game sound
    newGameSound.current.play();
  };

  return (
    <div className="bg-gradient-to-t from-pink-200 to-yellow-100 min-h-screen px-3">
      <header className="text-center pb-2 border-b-2">
        <h2 className="text-3xl font-serif">Guess the Number</h2>
      </header>

      <form className="container bg-green-400 p-6 rounded-xl shadow-md mx-auto max-w-lg flex flex-col items-center" onSubmit={handleSubmit}>
        <p className="text-lg mb-4 text-center">Enter a guess between 0 to 100</p>
        <input
          className="input-feild border-2 border-gray-300 p-2 w-44 rounded-md mb-4"
          type="number"
          placeholder="Enter a number"
          min="0"
          max="100"
          required
          value={userInput}
          onChange={handleInputChange}
        />
        <div className="btns flex justify-between w-full">
          <button
            className="submit-btn bg-cyan-300 text-black p-2 rounded-lg hover:bg-cyan-400 focus:scale-95 disabled:bg-gray-400"
            type="submit"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
          <button
            className="start-game-btn bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 disabled:bg-gray-400"
            type="button"
            onClick={handleStartGame}
            disabled={isStartGameDisabled}
          >
            Start Game
          </button>
        </div>
      </form>

      <footer className="text-center mt-6">
        <p className="result text-lg text-gray-700">{result}</p>
        <p className="all-guess text-sm text-gray-600">
          All guesses: {allGuesses.join(", ")}
        </p>
      </footer>

      <div className="sound">
        <audio ref={wrongSound}>
          <source src="../audio/wrong-buzzer-6268.mp3" />
        </audio>
        <audio ref={newGameSound} autoPlay>
          <source src="../audio/open-new-level-143027.mp3" />
        </audio>
        <audio ref={winSound}>
          <source src="../audio/victory-voiced-165989.mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Guess;

