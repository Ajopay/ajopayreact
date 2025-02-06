import React, { useState } from "react";
import Orange_logo from "../SVG/flutter_colored.svg";
import visiblee from "../SVG/visibility.svg";
import invisible from "../SVG/visibility_off.svg";
import "../css/signup.css";
import { Link } from "react-router-dom";

function SignIn() {
  const [visible, setVisible] = useState(false);

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
          <h3 className="form_title">Login</h3>
          <input type="text" placeholder="Email or Phone (234802000000)" />
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

          <button>Login</button>
        </form>
        <p className="login_link">
          Dont have an account?
          <span>
            {" "}
            <Link to="/SignUp"> Sign up instead</Link>{" "}
          </span>
          <br />
          <span>Forgot your password?</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
