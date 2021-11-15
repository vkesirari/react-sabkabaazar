import React from "react";
import CategoryNames from "../../containers/CategoryNames";
import Products from "../../containers/Products";
import "./style.scss";
const Product = () => (
  <section className="product-container">
    <section className="product-section">
      <CategoryNames />
    </section>
    <section className="product-details" id="main-product-details">
      {/* <!-- product details listing --> */}
      <Products />
    </section>
  </section>
);

export default Product;
