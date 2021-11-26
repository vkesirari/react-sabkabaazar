import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ReactComponent as Logo } from "../../assests/images/cart.svg";
import logoImg from "../../assests/images/logo.png";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { handleCartModel } from "../../redux/actions/cart";
const Header = ({ cartData }) => {
  const dispatch = useDispatch();
  const [modelCurrentState, setModelCurrentState] = useState(false);
  const [cartTotalCount, setCartTotalCount] = useState();
  useEffect(() => {
    setCartTotalCount(cartData.data);
  }, [cartData.data]);
  const openPage = (toggleVal, e) => {
    e.stopPropagation();
    setModelCurrentState(!toggleVal);
    dispatch(handleCartModel(toggleVal));
  };

  return (
    <>
      <header className="header-section content-center">
        <nav className="nav-section same-padding-sm">
          <Link to="/sign-in" className="link">
            SignIn
          </Link>
          <Link to="/sign-up" className="link">
            Register
          </Link>
        </nav>
        <menu className="menu-section">
          <div>
            <img
              className="logoApp"
              width="125px"
              src={`${logoImg}`}
              alt="Shopping logo sabka bazar"
            />
          </div>
          <div className="menu-cart-section">
            <div className="btn-section same-padding-sm">
              <Link to="/home" className="link marign-right-sm">
                Home
              </Link>
              <Link to="/products" className="link">
                Products
              </Link>
            </div>
            <div
              className="cart-section"
              onClick={(e) => openPage(modelCurrentState, e)}
            >
              <span>
                <Logo />
              </span>
              <p id="cart-value-update">
                {typeof cartTotalCount == "undefined"
                  ? 0
                  : cartTotalCount.data.length}
                &nbsp;items
              </p>
            </div>
          </div>
        </menu>
      </header>
      <hr className="divider-border" />
    </>
  );
};

Header.propTypes = {};
const mapStateToProps = (state) => {
  return {
    cartData: state.product.cartDat,
  };
};

export default connect(mapStateToProps)(Header);
