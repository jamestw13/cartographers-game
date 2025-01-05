import { useState } from 'react';
import './App.css';

import { edictCards, scoringCards, seasonCards, getExploreDeck } from './cards';
import { ExploreCard } from './ExploreCard';

function App() {
  const [boardState, setBoardState] = useState({ started: false, seasonIndex: 0, exploreDeck: [] });
  const [seasonIndex, setSeasonIndex] = useState(0);
  const currentSeason = seasonCards[seasonIndex];
  const [seasonTime, setSeasonTime] = useState(0);
  const [edict, setEdict] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const [exploreDeck, setexploreDeck] = useState(getExploreDeck());
  const handleStartGame = () => {
    setEdicts();
    setBoardState({ started: true, seasonIndex: 0, exploreDeck: () => getExploreDeck() });
  };
  const setEdicts = () => {
    const newEdicts = [];
    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * scoringCards.length);
      const newEdict = scoringCards.splice(index, 1);
      newEdicts.push(newEdict[0]);
    }

    setEdict(newEdicts);
  };
  return (
    <>
      {boardState.started === false ? (
        <button onClick={handleStartGame}>Start Game</button>
      ) : (
        <>
          <div className="season-edict-container">
            <div className="season-container" style={{ display: 'flex', flexDirection: 'column' }}>
              {currentSeason.name}
              <div>{currentSeason.edicts}</div>
              <div>
                {seasonTime} of {currentSeason.threshold}
              </div>

              {seasonIndex !== 3 ? (
                <button
                  onClick={() => {
                    setSeasonIndex(x => x + 1);
                  }}
                >
                  Next Season
                </button>
              ) : (
                <div>Done</div>
              )}
            </div>
            {edictCards.map((card, index) => (
              <div key={index} className="edict-a-container">
                <div>{edictCards[index]}</div>
                <div>{edict[index].name} </div>
              </div>
            ))}
          </div>
          <button onClick={() => setActiveCardIndex(x => x + 1)}>Next Card</button>
          {exploreDeck.map((card, index) => (
            <ExploreCard key={index} card={card} isActive={index === activeCardIndex} />
          ))}
        </>
      )}
    </>
  );
}

export default App;
