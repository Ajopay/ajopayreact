import React from "react";
import { Link } from "react-router-dom";
import logo from "../SVG/flutter_white.svg";
import "../css/hompage.css";
import topimg from "../images/topBackImg.6ae66675.png";
// import SignUp from "../jsx component/signupPage";

function HomePage() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <div className="logomark">
            <img src={logo} alt="" />
            <p>AJOPAY</p>
          </div>
          <div className="slogan">
            <p>Wire your money, your way</p>
          </div>
        </div>
        <div className="links">
          <p>FEATURES</p>
          <p>CONTACT</p>
          <p>API DOCUMENTATION</p>
          <p>LOGIN</p>
          <p>
            <Link to="/SignUp" className="p">
              REGISTER
            </Link>
          </p>
        </div>
      </div>

      <div className="hompage_article1">
        <div className="lhs">
          <h1>Bank of the new age, digitally built for you!</h1>
          <h3>DIGITAL BANKING</h3>
          <p>10X Better, Faster & Cheaper!</p>
          <p>Read Our API Documentation</p>
        </div>
        <div className="rhs">
          <img src={topimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
