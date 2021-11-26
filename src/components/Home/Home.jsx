import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Category from "../Category/Category";
import "./style.scss";
import Product from "../Product/Product";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import CartModel from "../../containers/Model/CartModel";
//redux config
import { Provider } from "react-redux";
import store from "../../redux/store";
import { handleCartModel } from "../../redux/actions/cart";

Home.propTypes = {};

function Home(props) {
  return (
    <div className="common-for-all">
      <Provider store={store}>
        <Router>
          {/* <Header handleCartModel={handleCartModel} /> */}
          <Header />

          {/* <Product /> */}
          {/* <Category /> */}
          {/* <SignIn /> */}
          {/* <SignUp /> */}
          {/* <CartModel
            itemCount="0"
            item={({ name: "vikramjeet" }, { name: "vikramjeet" })}
            modelCart="true"
          /> */}
          <Switch>
            <Route exact path="/" component={Product}></Route>
            <Route exact path="/products" component={Product}></Route>
            <Route exact path="/home" component={Category}></Route>
            <Route exact path="/sign-in" component={SignIn}></Route>
            <Route exact path="/sign-up" component={SignUp}></Route>
            {/* <Route exact path="/cart" component={CartModel}></Route> */}
          </Switch>
          {/* <Footer /> */}
        </Router>
      </Provider>
    </div>
  );
}

export default Home;
