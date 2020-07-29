import React from "react";
import "./newsHeader.style.scss";

const NewsHeader = ({ news: { title, link, image, date, source } }) => {
  const defaultImage =
    "https://m.economictimes.com/thumb/msid-74665367,width-1200,height-900,resizemode-4,imgsize-980841/from-the-trumpet-shaped-protrusion-at-the-centre-of-a-daffodil-or-narcissus-to-a-part-of-a-cornice-with-a-vertical-face-to-the-most-popular-shape-of-chandeliers-corona-has-long-been-an-acceptable-part-of-society-.jpg";

  const indexDate = date.indexOf(",") + 2;
  if (image === "") {
    image = defaultImage;
  }
  const style = { backgroundImage: "url(" + image + ")" };

  return (
    <div className="newsCard">
      <div className="header" onClick={() => window.open(link)} style={style}>
        <div className="content">
          <span className="source">{source}</span>
          <h2 className="title"> {title}</h2>
          <div className="author">
            <p>{date.slice(indexDate, date.length)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
