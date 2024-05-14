"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        player: (_, { id }, { dataSources }) => {
            return dataSources.MLBStatsAPI.getPlayer(id);
        },
        search: (_, { term }, { dataSources }) => {
            return dataSources.MLBStatsAPI.searchPlayers(term);
        }
    },
    PlayerTeam: {
        teammates: ({ id, season }, _, { dataSources }, info) => {
            const ignoredTeams = JSON.parse(info.variableValues.ignoredTeams);
            let ignoredTeam = [];
            if (ignoredTeams) {
                ignoredTeam = ignoredTeams.filter((team) => parseInt(team.id) === parseInt(id) && parseInt(team.season) === parseInt(season));
            }
            if (ignoredTeam.length > 0) {
                return null;
            }
            else {
                return dataSources.MLBStatsAPI.getTeam(id, season);
            }
        }
    }
};
