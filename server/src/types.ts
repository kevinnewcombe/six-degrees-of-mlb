import { GraphQLResolveInfo } from 'graphql';
import { PlayerModel, TeamModel, SearchResultModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  teammates?: Maybe<Team>;
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
  ignoredTeams?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchArgs = {
  term: Scalars['String']['input'];
};

export type SearchResults = {
  __typename?: 'SearchResults';
  people: Array<Maybe<TeamPerson>>;
};

export type SearchedTeam = {
  __typename?: 'SearchedTeam';
  id?: Maybe<Scalars['String']['output']>;
  season?: Maybe<Scalars['String']['output']>;
};

export type Team = {
  __typename?: 'Team';
  roster?: Maybe<Array<Maybe<TeamRoster>>>;
};

export type TeamPerson = {
  __typename?: 'TeamPerson';
  /** The full name of the player (Example: Alex Vesia) */
  fullName: Scalars['String']['output'];
  /** The ID of the player (Example: 681911 = Alex Vesia) */
  id: Scalars['ID']['output'];
  lastPlayedDate?: Maybe<Scalars['String']['output']>;
  mlbDebutDate?: Maybe<Scalars['String']['output']>;
};

export type TeamRoster = {
  __typename?: 'TeamRoster';
  person?: Maybe<TeamPerson>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Player: ResolverTypeWrapper<PlayerModel>;
  PlayerPeople: ResolverTypeWrapper<Omit<PlayerPeople, 'stats'> & { stats: Array<Maybe<ResolversTypes['PlayerStats']>> }>;
  PlayerSplits: ResolverTypeWrapper<Omit<PlayerSplits, 'team'> & { team?: Maybe<ResolversTypes['PlayerTeam']> }>;
  PlayerStats: ResolverTypeWrapper<Omit<PlayerStats, 'splits'> & { splits: Array<Maybe<ResolversTypes['PlayerSplits']>> }>;
  PlayerTeam: ResolverTypeWrapper<Omit<PlayerTeam, 'teammates'> & { teammates?: Maybe<ResolversTypes['Team']> }>;
  Query: ResolverTypeWrapper<{}>;
  SearchResults: ResolverTypeWrapper<SearchResults>;
  SearchedTeam: ResolverTypeWrapper<SearchedTeam>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Team: ResolverTypeWrapper<TeamModel>;
  TeamPerson: ResolverTypeWrapper<TeamPerson>;
  TeamRoster: ResolverTypeWrapper<TeamRoster>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Player: PlayerModel;
  PlayerPeople: Omit<PlayerPeople, 'stats'> & { stats: Array<Maybe<ResolversParentTypes['PlayerStats']>> };
  PlayerSplits: Omit<PlayerSplits, 'team'> & { team?: Maybe<ResolversParentTypes['PlayerTeam']> };
  PlayerStats: Omit<PlayerStats, 'splits'> & { splits: Array<Maybe<ResolversParentTypes['PlayerSplits']>> };
  PlayerTeam: Omit<PlayerTeam, 'teammates'> & { teammates?: Maybe<ResolversParentTypes['Team']> };
  Query: {};
  SearchResults: SearchResults;
  SearchedTeam: SearchedTeam;
  String: Scalars['String']['output'];
  Team: TeamModel;
  TeamPerson: TeamPerson;
  TeamRoster: TeamRoster;
};

export type PlayerResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  people?: Resolver<Array<Maybe<ResolversTypes['PlayerPeople']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPeopleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PlayerPeople'] = ResolversParentTypes['PlayerPeople']> = {
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stats?: Resolver<Array<Maybe<ResolversTypes['PlayerStats']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerSplitsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PlayerSplits'] = ResolversParentTypes['PlayerSplits']> = {
  team?: Resolver<Maybe<ResolversTypes['PlayerTeam']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerStatsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PlayerStats'] = ResolversParentTypes['PlayerStats']> = {
  splits?: Resolver<Array<Maybe<ResolversTypes['PlayerSplits']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerTeamResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PlayerTeam'] = ResolversParentTypes['PlayerTeam']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  season?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  teammates?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  player?: Resolver<ResolversTypes['Player'], ParentType, ContextType, RequireFields<QueryPlayerArgs, 'id'>>;
  search?: Resolver<ResolversTypes['SearchResults'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'term'>>;
};

export type SearchResultsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SearchResults'] = ResolversParentTypes['SearchResults']> = {
  people?: Resolver<Array<Maybe<ResolversTypes['TeamPerson']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchedTeamResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SearchedTeam'] = ResolversParentTypes['SearchedTeam']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  roster?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamRoster']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamPersonResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['TeamPerson'] = ResolversParentTypes['TeamPerson']> = {
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastPlayedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mlbDebutDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamRosterResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['TeamRoster'] = ResolversParentTypes['TeamRoster']> = {
  person?: Resolver<Maybe<ResolversTypes['TeamPerson']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Player?: PlayerResolvers<ContextType>;
  PlayerPeople?: PlayerPeopleResolvers<ContextType>;
  PlayerSplits?: PlayerSplitsResolvers<ContextType>;
  PlayerStats?: PlayerStatsResolvers<ContextType>;
  PlayerTeam?: PlayerTeamResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchResults?: SearchResultsResolvers<ContextType>;
  SearchedTeam?: SearchedTeamResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TeamPerson?: TeamPersonResolvers<ContextType>;
  TeamRoster?: TeamRosterResolvers<ContextType>;
};

