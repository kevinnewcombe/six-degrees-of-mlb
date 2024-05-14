
import './app.scss';
import { playerProps } from './core/types';
import { useState } from 'react';
import Links from './components/links/Links';
import Player from './components/player/Player';
function App() {
  const [player1, setPlayer1] = useState<playerProps|null>(null);
  const [player2, setPlayer2] = useState<playerProps|null>(null);
  // console.log('%cRemount App.jsx', 'background:#0f0; color:#000');
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Six Degrees of Separation</h1>
        <span className="app__subtitle">MLB player version</span>
      </header>
      <div className="app__players">
        <Player label={ 'Starting player' } player={ player1 } onSetPlayer={ setPlayer1 } />
        <Player label={ 'Target player' } player={ player2 } onSetPlayer={ setPlayer2 } />
      </div>
      { (player1 && player2) && (
        <Links player1={ player1 } player2={ player2 }/>
      )}
    </div>
  );
}

export default App;
