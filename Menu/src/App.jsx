import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCat = data.map((item) => item.category);
// const tempSet = new Set(tempCat);
// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

const allCat = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCat);
  const filterItems = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default App;
