import axios from "axios";
const newsApiKey = "7b1dca3f44d643db8fe7201775b99fb1";
export const youtubeApiKey = "AIzaSyCLXQelPPX5-g9CBkk4AfZ1ES7BYD8xeHI";

export const fetchNews = async () => {
  const url = `http://newsapi.org/v2/top-headlines?language=en&q=covid-19&apiKey=${newsApiKey}`;
  let {
    data: { articles },
  } = await axios.get(url);

  //get rid of duplicate articles
  const modifedNews = articles.filter(
    (v, i, a) => a.findIndex((t) => t.title === v.title) === i
  );

  return modifedNews;
};

export const fetchYoutubeNews = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
