import Title from "./Title";
import menu from "./data";
import { useState } from "react";
import Items from "./Items";
import Categories from "./Categores";

//Return single categorie to use the SET or FILTER later
const tempCategories = menu.map((item) => {
  return item.category;
});
//return array with 9 items with some repeated categories, we use set to limit them to unique cat
const tempSet = new Set(tempCategories);
//add all besides the SET array
const temItems = ["all", ...tempSet];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(temItems);

  const filterItems = (category) => {
    //to solve just the all issue
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    //filter the categories and set them into a new array where it will display all the matched categories
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Items items={menuItems} />
      </section>
    </main>
  );
};
export default Menu;
