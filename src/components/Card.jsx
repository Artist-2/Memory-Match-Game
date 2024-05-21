import React from 'react';
import './Card.css';

const Card = ({ id, symbol, flipped, onClick }) => (
  <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => onClick(id)}>
    <div className="card-inner">
      <div className="card-front">?</div>
      <div className="card-back">{flipped ? symbol : '?'}</div>
    </div>
  </div>
);

export default Card;
