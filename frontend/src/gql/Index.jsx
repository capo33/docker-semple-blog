import { gql } from "@apollo/client";

export const GET_GAMES = gql`
  query GetGames {
    games {
      id
      title
      description
      image
    }
  }
`;

export const GET_GAME = gql`
  query GetGame($gameId: ID!) {
    game(id: $gameId) {
      id
      title
      description
      image
    }
  }
`;
