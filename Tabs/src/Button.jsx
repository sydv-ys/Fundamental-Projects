import React from "react";

function Button({ jobs, currentItem, setCurrentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            onClick={() => setCurrentItem(index)}
            key={item.id}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
