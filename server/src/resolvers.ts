import { Resolvers } from "./types";
export const resolvers: Resolvers = {
  Query: {
    player: (_, {id}, {dataSources}) => {
      return dataSources.MLBStatsAPI.getPlayer(id);
    },

    search: (_, {term}, {dataSources}) => {
      return dataSources.MLBStatsAPI.searchPlayers(term);
    }
  },

  PlayerTeam: {
    teammates: ({id, season}, _, {dataSources}, info) => {
      const ignoredTeams = JSON.parse(info.variableValues.ignoredTeams as string);
      let ignoredTeam = [];
      if(ignoredTeams){
        ignoredTeam = ignoredTeams.filter((team:any) => parseInt(team.id) === parseInt(id) && parseInt(team.season) === parseInt(season));
      }
      if(ignoredTeam.length > 0){
        return null;
      }else{
        return dataSources.MLBStatsAPI.getTeam(id, season);
      }
    }
  }
};
