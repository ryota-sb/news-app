import moment from "moment";
import Props from "../types";

const Article: React.FC<Props> = ({ articles, title }) => {
  return (
    <section className="min-h-screen w-screen bg-black p-8">
    <h1>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h1>
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
      {articles.map((article, index) => {
        const time = moment(article.publishedAt || moment.now())
          .fromNow()
          .slice(0, 1);
        return (
          <div>
            <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
              {article.urlToImage && (
                <img className="h-56 lg:h-60 w-full object-cover" src={article.urlToImage} />
              )}
              <div className="p-3">
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                  {article.title}
                </h3>
                <p className="paragraph-normal text-gray-600">
                  {time}
                  時間前
                </p>
                <a href={article.url} key={index} target="_blank" rel="noopener" className="mt-3 block">Read More >></a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </section>
  );
};

export default Article;
