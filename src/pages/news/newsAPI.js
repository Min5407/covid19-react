import axios from "axios";
// const newsApiKey = "7b1dca3f44d643db8fe7201775b99fb1";
const newsApiKey = "77a2a871da902334e79dd260fcaa0350";
export const youtubeApiKey = "AIzaSyCLXQelPPX5-g9CBkk4AfZ1ES7BYD8xeHI";

export const fetchNews = async () => {
  // const url = `https://newsapi.org/v2/top-headlines?language=en&q=covid-19&apiKey=${newsApiKey}`;
  const url = `https://gnews.io/api/v2?q=example&token=${newsApiKey}&lang=en&q=covid19`;
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
