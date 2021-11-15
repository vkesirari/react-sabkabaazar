import React from "react";
import "./style.scss";
const SignIn = () => (
  <div className="signup-container content-center-register">
    <section className="signup-text">
      <h2>Login</h2>
      <p>Get Access to your Orders.Wishlist and Recommendations</p>
    </section>
    <section className="signup-form">
      <form className="cta-form" name="sign-up">
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className="last-box-margin">
          <label for="password">Password</label>
          <input id="password" type="password" name="password" required />
        </div>
        <button className="btn">Login</button>
      </form>
    </section>
  </div>
);

export default SignIn;
