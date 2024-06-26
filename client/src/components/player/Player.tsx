import './player.scss';
import { playerProps } from '../../core/types';
import { useState, useRef } from 'react';
import PlayerSearch from '../playerSearch/PlayerSearch';
const Player: React.FC<{label:string, player:playerProps|null, onSetPlayer:React.Dispatch<React.SetStateAction<playerProps | null>>}>= ({label, player, onSetPlayer}) => {
  // console.log(`%cRemount Player.jsx label={"${label}"} player={{fullName: "${player?.fullName}", id:"${player?.id}"}}`, 'background:#0f0; color:#000');
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function updateSetSearchTerm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(inputRef.current){
      // console.log(`%cupdateSetSearchTerm`, 'background:#fff; color:#000');
      setSearchTerm(inputRef.current.value);
      inputRef.current.value = '';
    }
  }
  return (
    <div className="player">
     
      { player && (
        <>
          <h2>{ label }{ player && `: ${player.fullName}` }</h2>
          <button onClick={ ()=> {onSetPlayer(null); setSearchTerm('')} }>Reset</button>
        </>
      )}
      { !player && (
        <>
          <form className="player__form" onSubmit={ updateSetSearchTerm }>
            <label htmlFor={ `player__searchinput_${label.replace(/\s/g, '')}`}><h2>Search for a { label.toLowerCase() }</h2></label>
            <input id={ `player__searchinput_${label.replace(/\s/g, '')}`} ref={ inputRef }type="text" />
          </form>
          {searchTerm && <PlayerSearch searchTerm={ searchTerm } onSetPlayer={ onSetPlayer }/> }
        </>
      )}

    </div>
  );
}

export default Player;
