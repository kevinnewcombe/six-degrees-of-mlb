import { RESTDataSource } from "@apollo/datasource-rest";
import { PlayerModel, TeamModel, SearchResultModel } from "../models"

export class MLBStatsAPI extends RESTDataSource {
  baseURL = "https://statsapi.mlb.com/api/v1/";

  getPlayer(id: string){
    return this.get<PlayerModel>(`people/${ id }?hydrate=stats(type=[yearByYear](team(league)),leagueListId=mlb_hist)`);
  }

  getTeam(teamId: string, seasonId:string){
    return this.get<TeamModel>(`teams/${teamId}/roster?hydrate=person&language=en&season=${seasonId}`);
  }

  searchPlayers(term: string){
    return this.get<SearchResultModel>(`people/search?names=${term}`);
  }
}

