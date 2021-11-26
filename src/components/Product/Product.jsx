import React, { useEffect, useState } from "react";
import CategoryNames from "../../containers/CategoryNames";
import Products from "../../containers/Products";
import { connect } from "react-redux";
import { categoryList, categoryListSelected } from "../../redux/actions/banner";
import { productList, cartProductSelected } from "../../redux/actions/product";
import { useDispatch } from "react-redux";
import "./style.scss";
import CartModel from "../../containers/Model/CartModel";
const Product = ({
  categoryLists,
  productLists,
  filterProductLists,
  cartData,
  toggleCart,
}) => {
  const [categoryNamesData, setcategoriesData] = useState([]);
  const [productsData, setProductList] = useState([]);
  const dispatch = useDispatch();
  const handleCategorySelected = (item) => {
    dispatch(categoryListSelected(item.id));
  };
  const handleProductSelected = (item) => {
    console.log("item product slected", item);
    dispatch(cartProductSelected(item));
  };
  const handleCartModelOPen = () => {
    console.log("model slected");
  };
  const handleCartAdd = (item) => {
    alert("ey", item);
    console.log("add", item);
  };
  const handleCartSub = (item) => {
    console.log("sub", item);
    alert("sb");
  };
  useEffect(() => {
    dispatch(categoryList());
    dispatch(productList());
  }, []);
  useEffect(() => {
    setcategoriesData(categoryLists.data);
    setProductList(productLists.data);
  }, [categoryLists.data, productLists.data]);
  console.log("eee-->>", filterProductLists.data);
  // useEffect(() => {
  //   setProductList(filterProductLists.data.data);
  // }, [filterProductLists.data.data]);

  console.log("toggleCart-prdct", toggleCart);
  // filterData("5b675e5e5936635728f9fc30");
  return (
    <>
      <section
        className={
          toggleCart ? `model-cart-container` : `model-cart-container-hidden`
        }
      >
        <CartModel
          cartData={cartData}
          toggleCart={toggleCart}
          handleCartAdd={handleCartAdd}
          handleCartSub={handleCartSub}
        />
      </section>
      <section className="product-container">
        <section className="product-section">
          {/* <!-- category details listing --> */}
          <CategoryNames
            categoryNamesData={categoryNamesData}
            handleCategorySelected={handleCategorySelected}
          />
        </section>
        <section className="product-details" id="main-product-details">
          {/* <!-- product details listing --> */}
          <Products
            productsData={productsData}
            handleProductSelected={handleProductSelected}
            filterProductLists={filterProductLists}
          />
        </section>
      </section>
    </>
  );
};

// export default Product;
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    categoryLists: state.banner.categorys,
    productLists: state.product.products,
    filterProductLists: state.banner.products,
    cartData: state.product.cartDat,
    toggleCart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Product);
