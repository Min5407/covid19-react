import React from "react";
import "./newsCard.style.scss";

const NewsCard = ({ news: { title, link, image, source } }) => {
  const defaultImage =
    "https://media.istockphoto.com/vectors/covid19-latest-news-coronavirus-red-background-concept-vector-id1212303021";

  return (
    <div className="newsCard">
      <div onClick={() => window.open(link)} className="flex">
        <img
          className="newsImage"
          src={image !== "" ? image : defaultImage}
          alt="unknown"
        />
        <div className="content">
          <h4>{title}</h4>
          <p>{source}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
