import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProductBySlug {
    products {
      id
      slug
      name
      description
    }
  }
`;

export default GET_PRODUCTS;
