import React from "react";
import "./newsCard.style.scss";

const NewsCard = ({
  news: {
    title,
    url,
    urlToImage,
    source: { name },
  },
}) => {
  const defaultImage =
    "https://m.economictimes.com/thumb/msid-74665367,width-1200,height-900,resizemode-4,imgsize-980841/from-the-trumpet-shaped-protrusion-at-the-centre-of-a-daffodil-or-narcissus-to-a-part-of-a-cornice-with-a-vertical-face-to-the-most-popular-shape-of-chandeliers-corona-has-long-been-an-acceptable-part-of-society-.jpg";

  return (
    <div className="newsCard">
      <div onClick={() => window.open(url)} className="flex">
        <img
          className="newsImage"
          src={urlToImage !== "" ? urlToImage : defaultImage}
          alt="unknown"
        />
        <div className="content">
          <h4>{title}</h4>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
