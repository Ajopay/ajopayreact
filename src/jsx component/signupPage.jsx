import React, { useState } from "react";
import "../css/signup.css";
// import { Link } from "react-router-dom";
import Orange_logo from "../SVG/flutter_colored.svg";
import visiblee from "../SVG/visibility.svg";
import invisible from "../SVG/visibility_off.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [visible, setVisible] = useState(false);
  const [cvisible, csetVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    email: "",
    phoneNumber: "",
    referralCode: "",
    supportCode: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        formData
      );
      console.log("Response:", response.data);
      localStorage.setItem("firstName", response.data.firstName);
      alert("Account created successfully!");
      navigate("/dashboard/payment");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed. Please try again.");
    }
  };

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
        <form action="" onSubmit={handleSubmit}>
          <h3 className="form_title">Create your personal account</h3>
          <input
            type="text"
            placeholder="First name"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="surName"
            id="surName"
            placeholder="Surname"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="234"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="referralCode"
            id="referralCode"
            placeholder="Referral Code(Optional)"
            onChange={handleChange}
          />
          <input
            type="text"
            name="supportCode"
            id="supportCode"
            placeholder="Support Code (Optional)"
            onChange={handleChange}
            autoComplete="new-password"
          />
          <div
            style={{ position: "relative", display: "inline-block" }}
            className="password"
          >
            <input
              type={visible ? "text" : "password"}
              placeholder="Password"
              style={{ paddingRight: "40px" }}
              onChange={handleChange}
              name="password"
              id="password"
              autoComplete="new-password"
              required
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
              onChange={handleChange}
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="new-password"
              required
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
              required
            />
            <label htmlFor="terms_condition">
              By signing up, you agree with the terms and conditions and privacy
              policy
            </label>
          </div>
          <button type="submit">Create account</button>
        </form>
        <p className="signup_link">
          Have an account?{" "}
          <span>
            <Link to="/SignIn">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
