import { initializeApollo } from "lib/apolloClient";
import { GET_PRODUCTS_BY_SLUG, GET_PRODUCTS } from "graphql/Products/query";

const apolloClient = initializeApollo();

export const getProducts = async () => {
  const response = await apolloClient.query({
    query: GET_PRODUCTS,
  });

  return response.data.products;
};

export const getProductBySlug = async (slug: string) => {
  const response = await apolloClient.query({
    query: GET_PRODUCTS_BY_SLUG,
    variables: {
      slug,
    },
  });

  const product = response.data.products[0];

  return product;
};
