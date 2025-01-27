import React from "react";

function SingleColor({ index, color }) {
  const { hex, weight } = color;
// Destructuring is a JavaScript syntax that allows you to extract multiple properties from an object and assign them to variables in one line.
// In this case, you're extracting the index and color properties from the props object.
// index will be the value of the index prop passed to the component.
// color will be the value of the color prop passed to the component.
// For example, if the component is used like this:

// jsx
// Copy
// <SingleColor index={1} color={{ hex: "#ff0000", weight: 50 }} />
// index will be 1.
// color will be an object: { hex: "#ff0000", weight: 50 }.

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
