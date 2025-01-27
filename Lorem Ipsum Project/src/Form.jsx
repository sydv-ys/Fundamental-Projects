import React, { useState } from "react";
import data from "./data";

function Form() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  // const handleCount = () => {
  //   setCount((e) => {
  //     e.target.value;
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Lorem Ipsum</h4>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
          min="1"
          max="8"
          step="1"
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default Form;
