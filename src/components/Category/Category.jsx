import React from "react";
import Categories from "../../containers/Categories";
import Slider from "../../containers/Slider/Slider";
import "./style.scss";

function Category(props) {
  return (
    <div>
      <Slider />
      <Categories />
    </div>
  );
}

export default Category;
