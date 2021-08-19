import { getCategoriesAndProds } from "services";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import Link from "next/link";

function Home({ categories }: any) {
  return (
    <div>
      <header>
        <nav>
          <div>
            <Link href="/">
              <img
                src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg"
                alt="logo"
              />
            </Link>
            <button>Categories</button>
          </div>
          <div>
            <button>My Account</button>
            <button>Cart</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const categories = await getCategoriesAndProds();

  return addApolloState(apolloClient, {
    props: {
      categories: [...categories],
    },
  });
}

export default Home;
