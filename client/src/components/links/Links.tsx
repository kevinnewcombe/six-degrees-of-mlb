import './links.scss';
import { playerProps, teammateProps } from '../../core/types';
import { useState, useEffect } from 'react';
import addTeammates from '../../core/findLink';
import Link from '../link/Link';
const Links: React.FC<{player1:playerProps, player2:playerProps}>= ({player1, player2}) => {
  // console.log(`%cRemount Links.jsx player1.fullName={"${player1.fullName}"}  player2.fullName={"${player2.fullName}"} `, 'background:#0f0; color:#000');
  
  const [links, setLinks] = useState<teammateProps[]>([]); // Provide an initial value of type 'teammatePathProps[]' for the 'links' state variable.

  useEffect(() => {
    async function getLink(){
      const data = await addTeammates(player1, player2, [], true, true);
      if(data){
        setLinks(data);
      }
    }
    getLink();
  }, []);
  
  return (
    <div className="links">
        {!links.length && <h3>Loading...</h3>}
        {(links.length > 0) && (
          <>
            <h3>{ player1.fullName } can be connected to { player2.fullName } in { links.length - 1} step{links.length!== 2 ? <>s</> : ''}</h3>
            <ul className="links__list">
              <Link player={ player1 } key={ player1.id }/>
              { links.map((link:teammateProps, index) => (
                <Link player={link} key={ link.id } index={ index} />
              ))}
            </ul>
          </>
        )}
    </div>
  );
}

export default Links;
