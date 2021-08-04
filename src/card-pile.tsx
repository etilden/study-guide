import './card-pile.css';
import { ICard } from './card'
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function CardPile(props: {card: ICard, displayAnswer: boolean}) {
  const { card, displayAnswer } = props
  const [shouldDisplayAnswer, setShouldDisplayAnswer] = useState(displayAnswer)

  const toggleDisplayAnswer = () => {
    setShouldDisplayAnswer(!shouldDisplayAnswer)
  }

  return (
    <ReactCardFlip isFlipped={shouldDisplayAnswer}>
        <div className="card question" onClick={() => toggleDisplayAnswer()}><p>{Object.keys(card)[0]}</p></div>
        <div className="card content" onClick={() => toggleDisplayAnswer()}>{Object.values(card)[0].map((p, i) => <p key={`paragraph-${i}`}>{p}</p>)}</div>
    </ReactCardFlip>
  );
}

export default CardPile;