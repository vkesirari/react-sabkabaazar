import React, { useEffect, useState } from "react";
import "./style.scss";
import { handleCartModel } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";
const Products = ({ productsData, handleProductSelected }) => {
  const dispatch = useDispatch();
  const productSelected = (item, e) => {
    e.stopPropagation();
    alert("clicked" + "---" + item.id);
    handleProductSelected(item);
    dispatch(handleCartModel());
  };
  return (
    <>
      {productsData && productsData.length === 0 ? (
        <h3>No Records Found !!</h3>
      ) : (
        ""
      )}
      {productsData &&
        productsData.map((item, index) => (
          <div className="product-detail" key={index}>
            <p className="product-title">{item.name}</p>
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
                  <p>{item.description.substr(0, 60) + "..."}</p>
                </div>
                <div className="product-price-section">
                  <div className="product-price">
                    <p>{item.price}</p>
                  </div>
                  <button
                    className="btn btn-padding"
                    onClick={(e) => productSelected(item, e)}
                  >
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
