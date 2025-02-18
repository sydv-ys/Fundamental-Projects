import React, { useState } from "react";

function Tour({ id, image, name, price, info, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 100)}... `}
          <br />
          <button
            className="info-btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
