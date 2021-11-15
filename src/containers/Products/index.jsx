import React from "react";
import "./style.scss";
import productsData from "../../store/server/products/index.get.json";

const Products = (porps) => {
  const productSelected = (item) => {
    alert("clicked" + "---" + item.id);
    console.log(item);
  };
  return (
    <>
      {productsData.map((item) => (
        <div className="product-detail">
          <h4 className="product-title">{item.name}</h4>
          <div className="product-tablet">
            <div className="product-img-set">
              <img
                className="product-image"
                src={item.imageURL}
                alt={item.name}
              />
            </div>
            <div className="des-tablet">
              <div className="product-des">
                <p>{item.description.substr(0, 50) + "..."}</p>
              </div>
              <div className="product-price-section">
                <div className="product-price">
                  <p>{item.price}</p>
                </div>

                <button className="btn" onClick={() => productSelected(item)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="dotted-line"></div>
        </div>
      ))}
    </>
  );
};
export default Products;
