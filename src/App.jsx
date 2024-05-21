import React, { useState } from 'react';
import Board from './components/Board';
import StartPage from './components/StartPage';
import './App.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [moves, setMoves] = useState(0);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleMoveChange = (newMoves) => {
    setMoves(newMoves);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <StartPage onStartGame={handleStartGame} />
      ) : (
        <>
          <h1>Memory Match Game</h1>
          <div className="board-container">
            <Board onMoveChange={handleMoveChange} />
          </div>
          <div className="scoreboard">
            <span>Moves: {moves}</span>
            <button onClick={() => window.location.reload()}>Reset</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
