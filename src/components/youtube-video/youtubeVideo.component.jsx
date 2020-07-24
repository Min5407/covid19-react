import React from "react";
import "./youtubeVideo.style.scss";
import Youtube from "react-youtube";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const YoutubeVideo = ({
  data: {
    snippet,
    id: { videoId },
  },
}) => {
  const opts = {
    height: "250",
    width: "400",
    playerVars: {
      origin: window.location.origin,

      // https://developers.google.com/youtube/player_parameters
    },
  };
  console.log(videoId, snippet.thumbnails);
  return (
    <div className="container">
      <div className="thumbnail-container">
        <div className="thumbnail">
          <img src={snippet.thumbnails.medium.url} alt="default" />
        </div>
        <span>
          <PlayCircleOutlineIcon />
        </span>
      </div>
      <strong>{snippet.title}</strong>
    </div>
  );
};

export default YoutubeVideo;
