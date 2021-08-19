import {
  GET_CATEGORIES,
  GET_CAT_PRODS_BY_SLUG,
} from "graphql/Categories/query";
import { initializeApollo } from "lib/apolloClient";

const apolloClient = initializeApollo();

export const getCategories = async () => {
  const response = await apolloClient.query({
    query: GET_CATEGORIES,
  });

  return response.data.categories;
};

export const getCatProdsBySlug = async (slug: string) => {
  const response = await apolloClient.query({
    query: GET_CAT_PRODS_BY_SLUG,
    variables: {
      slug,
    },
  });

  return response.data.categories[0];
};
