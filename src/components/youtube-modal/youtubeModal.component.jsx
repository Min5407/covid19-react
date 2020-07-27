import React from "react";
import "./youtubeModal.style.scss";
import Youtube from "react-youtube";

const YoutubeModal = ({ videoId, closeModal }) => {
  const opts = {
    height: "500",
    width: "750",
    playerVars: {
      autoplay: 1,
      origin: window.location.origin,

      // https://developers.google.com/youtube/player_parameters
    },
  };
  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal-content">
        <Youtube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default YoutubeModal;
