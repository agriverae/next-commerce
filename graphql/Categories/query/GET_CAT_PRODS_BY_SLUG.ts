import { gql } from "@apollo/client";

const GET_CATEGORY_PRODUCTS = gql`
  query getCategoryProducts {
    categories {
      name
      slug
      products {
        name
        slug
      }
    }
  }
`;

export default GET_CATEGORY_PRODUCTS;
