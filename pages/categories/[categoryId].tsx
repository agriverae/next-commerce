import { addApolloState, initializeApollo } from "lib/apolloClient";
import { getCategories, getCatProdsBySlug } from "services/Categories";

function Categories({ name, slug }: { name: string; slug: string }) {
  return <div>{slug}</div>;
}

export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = categories.map((product: any) => `/categories/${product.slug}`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const catAndProds = await getCatProdsBySlug("test-slug");

  return addApolloState(apolloClient, {
    props: { ...catAndProds },
  });
}

export default Categories;
