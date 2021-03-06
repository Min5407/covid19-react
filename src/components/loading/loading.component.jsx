import React from "react";
import "./loading.style.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading() {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
}

export default Loading;
