import React from "react";
import "./newsCard.style.scss";

const NewsCard = ({
  news: {
    author,
    title,
    url,
    urlToImage,
    source: { name },
  },
}) => {
  if (author && author.includes("href=")) {
    author = "unknown";
  } else if (!author) {
    author = "unknown";
  }
  const defaultImage =
    "https://m.economictimes.com/thumb/msid-74665367,width-1200,height-900,resizemode-4,imgsize-980841/from-the-trumpet-shaped-protrusion-at-the-centre-of-a-daffodil-or-narcissus-to-a-part-of-a-cornice-with-a-vertical-face-to-the-most-popular-shape-of-chandeliers-corona-has-long-been-an-acceptable-part-of-society-.jpg";

  return (
    <div className="newsCard">
      <img
        className="newsImage"
        src={urlToImage !== "" ? urlToImage : defaultImage}
        alt="unknown"
      />
      <h3>{title}</h3>
      <span>
        {author.length > 20 ? author.substring(0, 20) + " ...." : author}
      </span>
      <p>{name}</p>
    </div>
  );
};

export default NewsCard;
