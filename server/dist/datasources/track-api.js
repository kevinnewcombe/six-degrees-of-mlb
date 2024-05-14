"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MLBStatsAPI = void 0;
const datasource_rest_1 = require("@apollo/datasource-rest");
class MLBStatsAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://statsapi.mlb.com/api/v1/";
    }
    getPlayer(id) {
        return this.get(`people/${id}?hydrate=stats(type=[yearByYear](team(league)),leagueListId=mlb_hist)`);
    }
    getTeam(teamId, seasonId) {
        return this.get(`teams/${teamId}/roster?hydrate=person&language=en&season=${seasonId}`);
    }
    searchPlayers(term) {
        return this.get(`people/search?names=${term}`);
    }
}
exports.MLBStatsAPI = MLBStatsAPI;
