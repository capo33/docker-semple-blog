import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { json } from "./utils/index.js";
import typeDefs from "./graphql/schema/schema.js";
import Query from "./graphql/resolvers/Query.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: () => {
    return {
      json,
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
