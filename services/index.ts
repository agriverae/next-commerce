import { GET_CAT_AND_PRODS } from "graphql/Categories/query";
import { initializeApollo } from "lib/apolloClient";

const apolloClient = initializeApollo();

export const getCategoriesAndProds = async () => {
  const response = await apolloClient.query({
    query: GET_CAT_AND_PRODS,
  });

  return response.data.categories;
};
