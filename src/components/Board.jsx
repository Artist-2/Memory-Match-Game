import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Board.css';

const symbols = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍉', '🍍', '🥭'];

const Board = ({ onMoveChange }) => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const shuffledSymbols = [...symbols, ...symbols].sort(() => 0.5 - Math.random());
    const initialCards = shuffledSymbols.map((symbol, index) => ({
      id: index,
      symbol,
      flipped: false,
      matched: false,
    }));
    setCards(initialCards);
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    onMoveChange(0);
  };

  const handleCardClick = (id) => {
    const newCards = [...cards];
    const clickedCard = newCards.find(card => card.id === id);

    if (!clickedCard.flipped && !clickedCard.matched) {
      clickedCard.flipped = true;

      if (!firstCard) {
        setFirstCard(clickedCard);
      } else if (!secondCard) {
        setSecondCard(clickedCard);
        // Increment moves only when the second card is clicked
        setMoves(moves + 1);
        onMoveChange(moves + 1);
      }
    }
    setCards(newCards);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.symbol === secondCard.symbol) {
        const newCards = cards.map(card => {
          if (card.symbol === firstCard.symbol) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCards(newCards);
      } else {
        setTimeout(() => {
          const newCards = cards.map(card => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, flipped: false };
            }
            return card;
          });
          setCards(newCards);
        }, 1000);
      }
      setFirstCard(null);
      setSecondCard(null);
    }
  }, [firstCard, secondCard, cards]);

  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          symbol={card.symbol}
          flipped={card.flipped}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default Board;
