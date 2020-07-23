import React from "react";
import "./newsHeader.style.scss";

const NewsHeader = ({
  news: {
    author,
    title,
    url,
    urlToImage,
    publishedAt,
    source: { name },
  },
}) => {
  const defaultImage =
    "https://m.economictimes.com/thumb/msid-74665367,width-1200,height-900,resizemode-4,imgsize-980841/from-the-trumpet-shaped-protrusion-at-the-centre-of-a-daffodil-or-narcissus-to-a-part-of-a-cornice-with-a-vertical-face-to-the-most-popular-shape-of-chandeliers-corona-has-long-been-an-acceptable-part-of-society-.jpg";

  if (urlToImage === "") {
    urlToImage = defaultImage;
  }
  const style = { backgroundImage: "url(" + urlToImage + ")" };

  return (
    <div className="newsCard">
      <div className="header" onClick={() => window.open(url)} style={style}>
        <div className="content">
          <span className="source">{name}</span>
          <h2 className="title"> {title}</h2>
          <div className="author">
            <p>{author}</p>
            <p>{publishedAt.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
