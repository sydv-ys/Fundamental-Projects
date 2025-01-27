import Values from "values.js";
import "./App.css";
import ColorList from "./ColorList";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
