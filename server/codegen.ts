import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          Player: "./models#PlayerModel",
          Team: "./models#TeamModel",
          Search: "./models#SearchResultModel",
        },
      },
    },
  },
};

export default config;
