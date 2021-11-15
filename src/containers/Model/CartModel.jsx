import React, { useState } from "react";
import "./style.scss";

const CartModel = ({ modelCart, itemCount, item }) => {
  const [displayModel, setDisplayModel] = useState(modelCart);
  return (
    displayModel && (
      <div className="model-cart-container">
        <div>
          <h3>MyCart {itemCount > 0 && <small>({itemCount} item)</small>}</h3>
        </div>
        {itemCount > 0 ? (
          <>
            <div className="cart-details">
              <div className="cart-detail">
                <div>
                  <img
                    className="cart-detail-img"
                    src="../images/products/fruit-n-veg/apple.jpg"
                    alt=""
                  />
                </div>
                <div className="cart-item-detail">
                  <h4>Apple-Washington,Regular,4 pcs</h4>
                  <button className="btn btn--small">-</button>
                  <span className="item-detail">1</span>
                  <button className="btn btn--small">+</button>
                  <span className="item-detail">x</span>
                  <span>Rs.187</span>
                </div>
              </div>

              <div className="cart-price common-padding">
                <span>Rs.187</span>
              </div>
            </div>

            <div className="content-details-cart">
              <img src="../images/lowest-price.png" alt="" />

              <h3>You won't find it cheaper anywhere</h3>
            </div>
          </>
        ) : (
          <div>
            {" "}
            <h4>No items in your cart</h4>
            <p>Your favourite items are just a click away</p>
          </div>
        )}
        {itemCount > 0 ? (
          <div className="procced-details-cart">
            <div>
              <p className="procced-msg">
                Promo code can be applied on payment page
              </p>
            </div>
            <div className="btn process-content">
              <div>Procced to Checkout</div>
              <div>Rs.187 &#10148;</div>
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
    )
  );
};
export default CartModel;
