import React, { useState, useEffect } from 'react';
import cards from './cards';
import CardPile from './card-pile'
import { ICard } from './card'
import './App.css';

enum CardComprehension {
  COMPLETE,
  FOR_REVIEW,
  RESTART,
  REVIEW
}

function App() {
  const emptyCardPile: ICard[] = []

  const [drawPile, setDrawPile] = useState(cards)
  const [reviewPile, setReviewPile] = useState(emptyCardPile)
  const [completePile, setCompletePile] = useState(emptyCardPile)

  useEffect(() => setInitialValues(), [])

  const setInitialValues = () => {
    const storedDrawPile = JSON.parse(`${localStorage.getItem('drawPile')}`)
    const storedReviewPile = JSON.parse(`${localStorage.getItem('reviewPile')}`)
    const storedCompletePile = JSON.parse(`${localStorage.getItem('completePile')}`)

    if(storedDrawPile && storedDrawPile.length) setDrawPile(storedDrawPile)
    if(storedReviewPile) setReviewPile(storedReviewPile)
    if(storedCompletePile) setCompletePile(storedCompletePile)
  }

  const updatePiles = (comprehension: CardComprehension): void => {
    const currentCard: ICard = drawPile[0]

    switch (comprehension) {
      case CardComprehension.COMPLETE:
        setCompletePile([...completePile, currentCard])
        setDrawPile(drawPile.slice().splice(1))
        break;
      case CardComprehension.FOR_REVIEW:
        setReviewPile([...reviewPile, currentCard])
        setDrawPile(drawPile.slice().splice(1))
        break;
      case CardComprehension.REVIEW:
        setDrawPile([...reviewPile])
        setReviewPile([])
        break;
      case CardComprehension.RESTART:
        setDrawPile(cards)
        setReviewPile([])
        setCompletePile([])
        break;
    }

    localStorage.setItem('drawPile', JSON.stringify(cards))//(drawPile))
    localStorage.setItem('reviewPile', JSON.stringify(reviewPile))
    localStorage.setItem('completePile', JSON.stringify(completePile))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-content">AWS Cloud Practitioner Flash Cards</h1>
      </header>
      <div className="currentCard">
        {drawPile.length ?
          <CardPile key={JSON.stringify(drawPile[0])} card={drawPile[0]} displayAnswer={false} /> :
          <p className="emptyPile">Great Job!</p>
        }
      </div>
      { drawPile.length ?
        <div className="button-duo">
          <button onClick={() => updatePiles(CardComprehension.FOR_REVIEW)}>For Review</button>
          <button onClick={() => updatePiles(CardComprehension.COMPLETE)}>I've got this</button>
        </div> :
          reviewPile.length ?
            <button onClick={() => updatePiles(CardComprehension.REVIEW)}>
              Review
            </button> :
            <button onClick={() => updatePiles(CardComprehension.RESTART)}>
              Start over
            </button>
        }
    </div>
  );
}

export default App;
