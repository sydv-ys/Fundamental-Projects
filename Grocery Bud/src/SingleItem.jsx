import React, { useState } from "react";

function SingleItem({ item, removeItem }) {
  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p>{item.name}</p>
      <button className="btn remove-btn">delete</button>
    </div>
  );
}

export default SingleItem;
