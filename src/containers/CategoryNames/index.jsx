import React, { useState, useEffect } from "react";
import "./style.scss";
const CategoryNames = ({ categoryNamesData, handleCategorySelected }) => {
  const categorySelected = (item, e) => {
    e.stopPropagation();
    handleCategorySelected(item);
  };

  return (
    <ul id="category-items" classNameName="category-items">
      {categoryNamesData &&
        categoryNamesData.map((item) => (
          <li
            className="products-lists"
            onClick={(e) => categorySelected(item, e)}
          >
            {item.name}
          </li>
        ))}
    </ul>
  );
};
export default CategoryNames;
