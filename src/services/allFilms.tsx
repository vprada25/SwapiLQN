import { gql } from "@apollo/client";

export const ALL_FILMS = gql`
  query {
    allFilms {
      films {
        title
      }
    }
  }
`;
