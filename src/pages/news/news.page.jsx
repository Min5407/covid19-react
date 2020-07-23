import React, { useEffect, useState } from "react";
import "./news.style.scss";
import { fetchNews } from "./newsAPI";

import NewsCard from "../../components/news-card/newsCard.component";
import NewsHeader from "../../components/newsHeader/newsHeader.component";

const NewsPage = () => {
  const [newsData, setNewsData] = useState(null);
  useEffect(() => {
    const getNews = async () => {
      try {
        let news = await fetchNews();
        setNewsData(news);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);

  return (
    <div className="newsPage">
      <div className="articles">
        <div className="newsHeader">
          {newsData && <NewsHeader news={newsData[0]} />}
        </div>
        <div className="news-column">
          {newsData &&
            newsData
              .slice(1, newsData.length)
              .map((news, index) => <NewsCard key={index} news={news} />)}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
