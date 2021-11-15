import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import "./style.scss";
import { ReactComponent as Logo } from "../../assests/images/cart.svg";
import logoImg from "../../assests/images/logo.png";
import CartModel from "../../containers/Model/CartModel";
const Header = (props) => {
  const openPage = () => {
    // <CartModel />;
    alert("hello");
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
              width="100px"
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
            <div className="cart-section" onClick={() => openPage()}>
              <span>
                <Logo />
              </span>
              <p id="cart-value-update">0 items</p>
            </div>
          </div>
        </menu>
      </header>
      <hr className="divider-border" />
    </>
  );
};

Header.propTypes = {};

export default Header;
