import { addApolloState, initializeApollo } from "lib/apolloClient";
import { getProductBySlug, getProducts } from "services/Products";

function Products({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return <div>{name}</div>;
}

export async function getStaticPaths() {
  const products = await getProducts();

  const paths = products.map((product: any) => `/products/${product.slug}`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const product = await getProductBySlug("test");

  return addApolloState(apolloClient, {
    props: {
      ...product,
    },
  });
}

export default Products;
