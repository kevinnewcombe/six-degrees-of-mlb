import './playersearch.scss';
import { playerProps } from '../../core/types';
import { useQuery, gql } from "@apollo/client";
const SEARCH_NAMES = gql`
  query Search($term: String!) {
    search(term: $term) {
      people {
        id
        fullName
        lastPlayedDate
        mlbDebutDate
      }
    }
  }
`;

const PlayerSearch: React.FC<{searchTerm:string, onSetPlayer:React.Dispatch<React.SetStateAction<playerProps | null>>}>= ({searchTerm, onSetPlayer}) => {
  // console.log(`%cRemount PlayerSearch.jsx searchTerm={${searchTerm}}`, 'background:#0f0; color:#000');
  const { loading, error, data } = useQuery(SEARCH_NAMES, {
    variables: {
      term: searchTerm
    },
  });
  if(error) console.error('error', error);
  return <div className="playersearch">
    <h3>Search results for &ldquo;{ searchTerm }&rdquo;</h3>
    <ul className="playersearch__list">
      { loading && <li>Loading...</li>}
      { data && data?.search.people.length === 0 && <li>No results found</li> }
      { data && data?.search.people.map((p:any) => (
          <li key={p.id} ><button onClick={ () => onSetPlayer({id: p.id, fullName: p.fullName})}>{p.fullName} 
            {(p.mlbDebutDate||p.lastPlayedDate) ? ` (${p.mlbDebutDate ? new Date(p.mlbDebutDate).getFullYear() : ''} - ${p.lastPlayedDate ? new Date(p.lastPlayedDate).getFullYear() : ''})` : ''}
          </button></li>
        ))
      }
    </ul>
  </div>  
}


export default PlayerSearch;
