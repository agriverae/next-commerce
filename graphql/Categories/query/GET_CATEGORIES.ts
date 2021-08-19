import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      name
      slug
    }
  }
`;

export default GET_CATEGORIES;
