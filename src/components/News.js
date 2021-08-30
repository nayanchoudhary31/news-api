import React, { useContext } from "react";
import NewsArticles from "./NewsArticles";
import { NewsContext } from "./NewsContext";

const News = () => {
  const { data } = useContext(NewsContext);
  return (
    <div>
      <h1>News API 📓</h1>
      <div className="news_all">
        {data
          ? data.articles.map((news) => (
              <NewsArticles data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default News;
