import{ playerProps, teammatePathProps, splitProps, teammatePerson, teammatesProps, playersToCheckProps } from './types';
let checkedPlayers: string[] = [];
let playersToCheck: playersToCheckProps = [];
let checkedTeams: {id: string, season:string}[] = [];

const addTeammates = async (player1:playerProps, player2:playerProps, path:teammatePathProps, parentIsLastNode:boolean, isFirstRun: boolean) : Promise<teammatePathProps | undefined> =>{ // Promise<teammatePathProps|undefined>
  if(isFirstRun){
    checkedPlayers = [];
    playersToCheck = [];    
  }
  console.clear();
  console.log('depth: '+(path.length + 1) + ' | # of checked players: '+checkedPlayers.length + ' | # of checked teams: '+checkedTeams.length);
  let response;
  const teammates:teammatesProps = {};
  try{
    response = await fetch(
      `http://localhost:4000/`,{
          method: "POST",
          body: JSON.stringify({
            query: `
              query Player($playerId: ID!, $ignoredTeams: String) {
                player(id: $playerId, ignoredTeams: $ignoredTeams) {
                  people {
                    fullName
                    id
                    stats {
                      splits {
                        team {
                          id
                          season
                          name
                          teammates {
                            roster {
                              person {
                                fullName
                                id
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables:{ "playerId": player1.id, "ignoredTeams": JSON.stringify(checkedTeams) }
          }), 
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch( error ){
      console.error('error', error);
    }

    if (response?.ok) {
      const data = await response.json();
      data?.data.player.people[0].stats[0].splits.forEach((split:splitProps) => { 
        if( (split.team) !== null ){
          if(split.team.teammates !== null){
            checkedTeams.push({id: split.team.id, season: split.team.season})
          }
          split.team.teammates?.roster.forEach((teammate:teammatePerson) => {
            teammates[teammate.person.id] = {
              id: teammate.person.id,
              fullName: teammate.person.fullName,
              teamName: split.team.name,
              season: split.team.season
            };
          });
        }
      })
      checkedPlayers.push(player1.id);

      for (const i in teammates) {
        const e = teammates[i];
        if(e.id === player2.id ){
          path.push(e);
          return path; // it's a match
        }else if(!checkedPlayers.includes(e.id)){
          playersToCheck.push({player: e, path: [...path, e], parentIsLastNode: parentIsLastNode && i === Object.keys(teammates)[Object.keys(teammates).length-1]});
        }
      }
      if(parentIsLastNode){
        let c;
        while (typeof (c = playersToCheck.shift()) !== "undefined") {
          const p = await addTeammates(
            c.player,
            player2,
            c.path,
            c.parentIsLastNode,
            false
          );
          if (p) {
            return p;
          }
        }
        }
    }else{
      console.error(`Error! ${response?.status} | ${response?.statusText}`)
    }
}

export default addTeammates;
