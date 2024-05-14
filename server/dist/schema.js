"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.typeDefs = (0, graphql_tag_1.default) `
  type Query {
    "Get a list of teams and seasons by player ID"
    player(id: ID!, ignoredTeams: String): Player! 
    
    "Search for a player by name"
    search(term: String!): SearchResults!
  }

  type SearchResults{
    people: [TeamPerson]!
  }

  type SearchedTeam {
    id: String,
    season: String
  }
  type TeamPerson{
    "The ID of the player (Example: 681911 = Alex Vesia)"
    id: ID!
    "The full name of the player (Example: Alex Vesia)"
    fullName: String!
    lastPlayedDate: String,
    mlbDebutDate: String
  }


  type Player{
    people: [PlayerPeople]!,
  }

  type PlayerPeople{
    "Full name of the player"
    fullName: String!
    "The ID of the player (Example: 681911 = Alex Vesia)"
    id: ID!
    stats: [PlayerStats]!
  }

  type PlayerStats{
    splits: [PlayerSplits]!
  }
  
  type PlayerSplits{
    team: PlayerTeam
  } 

  type PlayerTeam{
    "The ID of the team (Example: 111 = Boston Red Sox)"
    id: ID!
    "The full name of the team (Example: 'Boston Red Sox')"
    name: String! 
    "The season year (Example: 2021)"
    season: ID!
    "A list of all other players on the roster for that season"
    teammates: Team
  }

  type Team{
    roster: [TeamRoster]
  }

  type TeamRoster{
    person: TeamPerson
  }


`;
