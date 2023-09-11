const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    description: String!
    image: String!
  }

  type Query {
    games: [Game]
    game(id: ID!): Game
  }
`
export default typeDefs