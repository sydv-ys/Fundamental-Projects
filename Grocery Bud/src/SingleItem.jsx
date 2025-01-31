import React from "react";

function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p>{item.name}</p>
      <button
        className="btn remove-btn"
        onClick={() => {
          removeItem(item.id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
