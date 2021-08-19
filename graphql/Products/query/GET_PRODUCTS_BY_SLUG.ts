import { gql } from "@apollo/client";

const GET_PRODUCTS_BY_SLUG = gql`
  query getCategoryProducts($slug: String!) {
    categories(where: { slug: $slug }) {
      name
      slug
      product {
        name
        slug
      }
    }
  }
`;

export default GET_PRODUCTS_BY_SLUG;
