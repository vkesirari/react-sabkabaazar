import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect, useDispatch } from "react-redux";

const CartModel = ({ toggleCart, cartData, handleCartAdd, handleCartSub }) => {
  // console.log("cartData", cartData, "toggleCart", toggleCart);

  const [displayModel, setDisplayModel] = useState(toggleCart);
  const [cartsData, setCartData] = useState(cartData.data);
  const [cartTotalCount, setCartTotalCount] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setCartData(cartData.data);
    setCartTotalCount(cartData.data);
  }, [cartData.data]);
  // useEffect(() => {
  //   setCartTotalCount(cartData.data.data);
  // }, [cartData.data.data]);
  let itemCount = 1;
  // console.log("itemCount", itemCount);
  console.log("cartTotalCount", cartTotalCount);
  console.log("cartsData", typeof cartsData == "undefined");
  const addcartItem = (item) => {
    handleCartAdd(item);
  };
  const subCartItem = (item) => {
    handleCartSub(item);
  };

  // useEffect(() => {
  //   console.log("cartData --->>>", cartData);
  // }, []);

  return (
    <div>
      {cartTotalCount && cartTotalCount.data.length > 0 ? (
        <div className="item-cart">
          <h3>
            My Cart
            <small>
              ({cartTotalCount && cartTotalCount.data.length}&nbsp;item)
            </small>
          </h3>
        </div>
      ) : (
        <div className="no-item-cart">
          <h3>My Cart</h3>
        </div>
      )}

      {cartTotalCount && cartTotalCount.data.length > 0 ? (
        <div className="cart-item-dynamic">
          {cartsData &&
            cartsData.data &&
            cartsData.data.map((item, index) => (
              <div className="add-cart-details" key={index}>
                <div className="add-cart-detail">
                  <div>
                    <img
                      className="add-cart-detail-img"
                      src={`../${item.imageURL}`}
                      alt=""
                    />
                  </div>
                  <div className="cart-item-detail">
                    <h4>{item.name}</h4>

                    <button
                      className="btn btn--small"
                      onClick={(e) => addcartItem(item, e)}
                    >
                      -
                    </button>
                    <span className="item-detail">1</span>
                    <button
                      className="btn btn--small"
                      onClick={(e) => subCartItem(item, e)}
                    >
                      +
                    </button>
                    <span className="item-detail">x</span>
                    <span>Rs.{item.price}</span>
                  </div>
                </div>

                <div className="cart-price common-padding">
                  <span>Rs.{item.price}</span>
                </div>
              </div>
            ))}
          <div className="content-details-cart">
            <img src="../images/lowest-price.png" alt="" />

            <h3>You won't find it cheaper anywhere</h3>
          </div>
        </div>
      ) : (
        <div className="no-item-cart-inner">
          <h4>No items in your cart</h4>
          <p>Your favourite items are just a click away</p>
        </div>
      )}
      {cartTotalCount && cartTotalCount.data.length > 0 ? (
        <div className="procced-details-cart">
          <div>
            <p className="procced-msg">
              Promo code can be applied on payment page
            </p>
          </div>
          <div className="btn process-content">
            <div>Procced to Checkout</div>
            <div>Rs.{cartsData && cartsData.totalPriceProduct} &#10148;</div>
          </div>
        </div>
      ) : (
        <div
          class="procced-details-cart-processed"
          id="procced-details-cart-processed"
        >
          <div class="btn">
            <div>Start Shopping</div>
          </div>
        </div>
      )}
    </div>
  );
};
// export default CartModel;
const mapStateToProps = (state) => {
  return {
    cartData: state.product.cartDat,
  };
};

export default connect(mapStateToProps)(CartModel);
