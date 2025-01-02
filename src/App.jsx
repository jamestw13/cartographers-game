import { useState } from 'react';
import './App.css';

import { edictCards, scoringCards, seasonCards } from './cards';

function App() {
  const [seasonIndex, setSeasonIndex] = useState(0);
  const [edict, setEdict] = useState([]);

  const handleSetEdicts = () => {
    const newEdicts = [];
    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * scoringCards.length);
      const newEdict = scoringCards.splice(index, 1);
      newEdicts.push(newEdict[0]);

      // setEdict(x => x.append(edict[0]));
    }
    console.log(newEdicts);
    setEdict(newEdicts);
  };
  return (
    <>
      <button onClick={handleSetEdicts}>Start Game</button>
      <div className="season-edict-container">
        <div className="season-container">{seasonCards[seasonIndex]}</div>

        <div className="edict-a-container">
          <div>{edictCards[0]}</div>
          <div>{edict.length > 0 ? edict[0].name : 'waiting'} </div>
        </div>

        <div className="edict-b-container">
          <div>B</div>
          <div>{edict.length > 0 ? edict[1].name : 'waiting'} </div>
        </div>
        <div className="edict-c-container">
          <div>C</div>
          <div>{edict.length > 0 ? edict[2].name : 'waiting'} </div>
        </div>
        <div className="edict-d-container">
          <div>D</div>
          <div>{edict.length > 0 ? edict[3].name : 'waiting'} </div>
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
      <div></div>
    </>
  );
}

export default App;
