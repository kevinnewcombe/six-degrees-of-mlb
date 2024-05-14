import './link.scss';
import { teammateProps, startingPlayerProps } from '../../core/types';
const Link: React.FC<{player:teammateProps|startingPlayerProps, index?:number}>= ({player, index}) => {
  return (
    <>
      { ('season' in player && 'teamName' in player) && <li className="link__team">
          ...{ (typeof index === 'number' && index > 0) ? 'who also ' : ''}played on the <strong>{player.season} {player.teamName}</strong> with
        </li> }
      <li className="link__player">
        {player.fullName}
      </li>
    </>
  );
}

export default Link;
