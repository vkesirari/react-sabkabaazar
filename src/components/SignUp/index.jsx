import React from "react";
import "./style.scss";
const SignUp = () => (
  <div className="signup-container content-center-register">
    <section className="signup-text">
      <h2>Signup</h2>
      <p>We do not share your personal details with anyone.</p>
    </section>
    <section className="signup-form">
      <form className="cta-form" name="sign-up">
        <div>
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" name="first-name" required />
        </div>
        <div>
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" name="last-name" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" name="password" required />
        </div>
        <div className="last-box-margin">
          <label for="email">Confirm password</label>
          <input
            id="Confirm-password"
            type="password"
            name="Confirm-password"
            required
          />
        </div>

        <button className="btn">Signup</button>
      </form>
    </section>
  </div>
);

export default SignUp;
