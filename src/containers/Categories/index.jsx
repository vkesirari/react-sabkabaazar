import React from "react";
import "./style.scss";
import categoriesData from "../../store/server/categories/index.get.json";

const Categories = (porps) => (
  <section id="category-container">
    {categoriesData.map((item) => (
      <div class="img-photo-container">
        <div class="home-img">
          <img src={`${item.imageUrl}`} alt={item.name} />
        </div>
        <div class="img-container-details">
          <h3>{item.name}</h3>
          <p class="para-des">{item.description}</p>
          <button class="btn">Explore {item.key}</button>
        </div>
      </div>
    ))}
  </section>
);
export default Categories;
