import React, { useState } from "react";
import "../css/signup.css";
// import { Link } from "react-router-dom";
import Orange_logo from "../SVG/flutter_colored.svg";
import visiblee from "../SVG/visibility.svg";
import invisible from "../SVG/visibility_off.svg";

function SignUp() {
  const [visible, setVisible] = useState(false);
  const [cvisible, csetVisible] = useState(false);

  return (
    <div className="Signup">
      <div className="signup_box">
        <div className="logo">
          <img src={Orange_logo} alt="" />
          <p>
            AJO<span>PAY</span>
          </p>
        </div>
        <div className="Slogan">
          <p>Wire your money, your way</p>
        </div>
        <form action="">
          <h3 className="form_title">Create your personal account</h3>
          <input type="text" placeholder="First name" />
          <input type="text" name="" id="" placeholder="Surname" />
          <input type="email" name="" id="" placeholder="Email Address" />
          <input type="tel" name="" id="" placeholder="234" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Referral Code(Optional)"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Support Code (Optional)"
          />
          <div
            style={{ position: "relative", display: "inline-block" }}
            className="password"
          >
            <input
              type={visible ? "text" : "password"}
              placeholder="Password"
              style={{ paddingRight: "40px" }} // Space for the icon
            />
            <span
              onClick={() => setVisible(!visible)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <img src={visible ? invisible : visiblee} alt="" />
            </span>
          </div>
          <div
            style={{ position: "relative", display: "inline-block" }}
            className="password"
          >
            <input
              type={cvisible ? "text" : "password"}
              placeholder="Confirm Password"
              style={{ paddingRight: "40px" }}
            />
            <span
              onClick={() => csetVisible(!cvisible)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <img src={cvisible ? invisible : visiblee} alt="" />
            </span>
          </div>
          <div className="terms_condition_container">
            <input
              type="checkbox"
              id="terms_condition"
              className="terms_condition_checkbox"
            />
            <label for="terms_condition">
              By signing up, you agree with the terms and conditions and privacy
              policy
            </label>
          </div>
          <button>Create account</button>
        </form>
        <p className="signup_link">
          Have an account? <span>Sign In</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
