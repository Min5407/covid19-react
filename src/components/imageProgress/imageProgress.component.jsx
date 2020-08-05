import React, { useEffect } from "react";
import "./imageProgress.style.scss";
import { UploadMessage } from "../chatTextfield/firebase.api";

const ImageProgressBar = ({ fullMessage, setFullMessage }) => {
  const { image } = fullMessage;

  const { url, fileProgress } = UploadMessage(fullMessage);

  useEffect(() => {
    if (url) {
      setFullMessage(null);
    }
  }, [url, setFullMessage]);

  return (
    <div
      className="imageProgressBar"
      style={image ? { width: fileProgress + "%" } : { display: "none" }}
    ></div>
  );
};

export default ImageProgressBar;
