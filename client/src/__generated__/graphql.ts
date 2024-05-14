/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Player = {
  __typename?: 'Player';
  people: Array<Maybe<PlayerPeople>>;
};

export type PlayerPeople = {
  __typename?: 'PlayerPeople';
  /** Full name of the player */
  fullName: Scalars['String']['output'];
  /** The ID of the player (Example: 681911 = Alex Vesia) */
  id: Scalars['ID']['output'];
  stats: Array<Maybe<PlayerStats>>;
};

export type PlayerSplits = {
  __typename?: 'PlayerSplits';
  team?: Maybe<PlayerTeam>;
};

export type PlayerStats = {
  __typename?: 'PlayerStats';
  splits: Array<Maybe<PlayerSplits>>;
};

export type PlayerTeam = {
  __typename?: 'PlayerTeam';
  /** The ID of the team (Example: 111 = Boston Red Sox) */
  id: Scalars['ID']['output'];
  /** The full name of the team (Example: 'Boston Red Sox') */
  name: Scalars['String']['output'];
  /** The season year (Example: 2021) */
  season: Scalars['ID']['output'];
  /** A list of all other players on the roster for that season */
  teammates: Team;
};

export type Query = {
  __typename?: 'Query';
  /** Get a list of teams and seasons by player ID */
  player: Player;
  /** Search for a player by name */
  search: SearchResults;
};


export type QueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchArgs = {
  term: Scalars['String']['input'];
};

export type SearchResults = {
  __typename?: 'SearchResults';
  people: Array<Maybe<TeamPerson>>;
};

export type Team = {
  __typename?: 'Team';
  roster: Array<Maybe<TeamRoster>>;
};

export type TeamPerson = {
  __typename?: 'TeamPerson';
  /** The full name of the player (Example: Alex Vesia) */
  fullName: Scalars['String']['output'];
  /** The ID of the player (Example: 681911 = Alex Vesia) */
  id: Scalars['ID']['output'];
};

export type TeamRoster = {
  __typename?: 'TeamRoster';
  person: TeamPerson;
};

export type SearchQueryVariables = Exact<{
  term: Scalars['String']['input'];
}>;


export type SearchQuery = { __typename?: 'Query', search: { __typename?: 'SearchResults', people: Array<{ __typename?: 'TeamPerson', id: string, fullName: string } | null> } };


export const SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"term"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"term"},"value":{"kind":"Variable","name":{"kind":"Name","value":"term"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;