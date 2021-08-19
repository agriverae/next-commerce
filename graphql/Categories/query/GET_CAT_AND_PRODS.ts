import { gql } from "@apollo/client";

const GET_CAT_AND_PRODS = gql`
  query getCategoryProducts {
    categories {
      name
      slug
      products {
        id
        name
        slug
        quantity
      }
    }
  }
`;

export default GET_CAT_AND_PRODS;
