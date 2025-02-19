import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 } from "uuid";

function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = v4();
        return (
          <div key={index} className="job-disc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Duties;
