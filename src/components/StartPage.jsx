import React from 'react';

const StartPage = ({ onStartGame }) => {
  return (
    <div className="start-page">
      <h2>Welcome to Memory Match Game</h2>
      <p>Click the button below to start the game!</p>
      <button onClick={onStartGame}>Start Game</button>
      <div className="developer">Developed by Raja Shahzaib</div>
    </div>
  );
};

export default StartPage;
