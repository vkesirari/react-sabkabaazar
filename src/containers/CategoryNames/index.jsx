import React from "react";
import "./style.scss";
import categoryNamesData from "../../store/server/categories/index.get.json";

const CategoryNames = () => {
  const categorySelected = (item) => {
    alert("clicked" + "---" + item.id);
    console.log(item);
  };
  return (
    <ul id="category-items" classNameName="category-items">
      {categoryNamesData.map((item) => (
        <li className="products-lists" onClick={() => categorySelected(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
export default CategoryNames;
