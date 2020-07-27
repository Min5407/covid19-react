import React, { useEffect, useState } from "react";
import "./news.style.scss";
import { fetchNews, fetchYoutubeNews, youtubeApiKey } from "./newsAPI";

import NewsCard from "../../components/news-card/newsCard.component";
import NewsHeader from "../../components/newsHeader/newsHeader.component";
import Loading from "../../components/loading/loading.component";
import YoutubeVideo from "../../components/youtube-video/youtubeVideo.component";
import YoutubeModal from "../../components/youtube-modal/youtubeModal.component";

const NewsPage = () => {
  const [newsData, setNewsData] = useState(null);
  const [youtubeVideos, setYoutubeVideos] = useState(null);

  const [modal, setModal] = useState(false);
  const [modalVideoID, setModalVideoID] = useState(null);

  const openModal = (videoID) => {
    setModalVideoID(videoID);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const onWheel = (e) => {
    var container = document.getElementById("videoRows");
    var containerScrollPosition = document.getElementById("videoRows")
      .scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth", //if you want smooth scrolling
    });
  };

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

  useEffect(() => {
    const getYoutubeNews = async () => {
      try {
        let {
          data: { items },
        } = await fetchYoutubeNews.get("search", {
          params: {
            part: "snippet",
            maxResults: 10,
            key: youtubeApiKey,
            order: "relevance",
            q: "covid19 news",
            relevanceLanguage: "en",
            type: "video",
          },
        });

        setYoutubeVideos(items);
      } catch (error) {
        console.log("error");
        console.log(error.response);
      }
    };
    getYoutubeNews();
  }, []);

  if (newsData && youtubeVideos) {
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
        <div className="youtubeNews" id="videoRows" onWheel={onWheel}>
          {youtubeVideos.map((video, index) => (
            <YoutubeVideo key={index} data={video} openModal={openModal} />
          ))}
        </div>

        <div>
          {modal && (
            <YoutubeModal videoId={modalVideoID} closeModal={closeModal} />
          )}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default NewsPage;
