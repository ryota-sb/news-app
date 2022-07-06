import Head from "next/head";
import MainLayout from "../layouts";
import Article from "../components/article";
import WeatherNews from "../components/weather-news";

export default function Home(props) {
  console.log(props.topArticles);
  return (
    <MainLayout>
      <Head>
        <title>News App</title>
      </Head>

      <div>
        <Article title="" articles={props.topArticles} />
      </div>

      <div>
        <WeatherNews weatherNews={props.weatherNews} />
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const pageSize = 20;
  const NewsAPIKey = "2cc53b696c924fe7923f8988bd6d0c9d";
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${NewsAPIKey}`
  );
  const topJson = await topRes.json();
  const topArticles = topJson?.articles;

  const lat = 35.4122;
  const lon = 139.413;
  const exclude = "hourly, minutely";
  const WeatherAPIKey = "699be0ede954d545d98907ef0d3e0f55";
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${WeatherAPIKey}`
  );

  const weatherJson = await weatherRes.json();
  const weatherNews = weatherJson;

  return {
    props: {
      topArticles,
      weatherNews,
    },
    revalidate: 60 * 10,
  };
};
