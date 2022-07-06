import Head from "next/head";
import MainLayout from "../layouts";
import Article from "../components/article";
import Nav from "../components/nav";

export default function Home(props) {
  console.log(props.topArticles);
  return (
    <MainLayout>
      <Head>
        <title>News App</title>
      </Head>

      {/* <div>
        <div>
          <nav>
            <Nav />
          </nav>
        </div>
      </div> */}

      <div>
        <Article title="" articles={props.topArticles} />
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const pageSize = 20;
  const APIKey = "2cc53b696c924fe7923f8988bd6d0c9d";
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${APIKey}`
  );
  const topJson = await topRes.json();
  const topArticles = topJson?.articles;

  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  };
};
