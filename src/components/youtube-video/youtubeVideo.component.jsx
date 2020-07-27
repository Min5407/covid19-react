import React from "react";
import "./youtubeVideo.style.scss";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import YoutubeModal from "../youtube-modal/youtubeModal.component";

const YoutubeVideo = ({
  data: {
    snippet,
    id: { videoId },
  },
  openModal,
}) => {
  // console.log(videoId, snippet.thumbnails);
  return (
    <div className="container" onClick={() => openModal(videoId)}>
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
