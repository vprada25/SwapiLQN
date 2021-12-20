import { gql } from "@apollo/client";

export const ALL_PEOPLE = gql`
  query {
    allPeople {
      edges {
        node {
          id
          name
         
        }
      }
    }
  }
`;

