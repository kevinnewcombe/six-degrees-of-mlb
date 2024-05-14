import { MLBStatsAPI } from "./datasources/track-api";

export type DataSourceContext = {
  dataSources: {
    MLBStatsAPI: MLBStatsAPI;
  };
}
