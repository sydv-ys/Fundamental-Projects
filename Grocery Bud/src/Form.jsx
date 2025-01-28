import React, { useState } from "react";

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="enter an item"
          />
          <button type="submit" className="btn">
            search
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
