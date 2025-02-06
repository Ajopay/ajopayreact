import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/dash.css";
import logo from "../SVG/flutter_colored.svg";
import wallet from "../SVG/wallet.svg";
import transaction from "../SVG/multiple_stop.svg";
import credit_card from "../SVG/credit_card.svg";
import contact from "../SVG/contacts.svg";
import notification from "../SVG/notification.svg";
import setting from "../SVG/setting.svg";
import activity from "../SVG/visibility.svg";
import faq from "../SVG/quiz.svg";
import axios from "axios";

function Dashboard() {
  return (
    <div className="dashboard">
      <aside>
        <div className="bank_title">
          <img src={logo} alt="" />
          <p>AJOPAY</p>
        </div>
        <div className="dashboard_options">
          <Link to="payment">
            <img src={wallet} alt="" />
            <span>Payment</span>
          </Link>
          <Link to="payment">
            <img src={transaction} alt="" />

            <span>Transaction</span>
          </Link>
          <Link to="payment">
            <img src={credit_card} alt="" />
            <span>Card</span>
          </Link>
          <Link to="payment">
            <img src={contact} alt="" />
            <span>Contact</span>
          </Link>
          <Link to="payment">
            <img src={notification} alt="" />
            <span>Notifications</span>
          </Link>
          <Link to="payment">
            <img src={setting} alt="" />

            <span>Settings</span>
          </Link>
          <Link to="payment">
            <img src={wallet} alt="" />
            <span>Loan Request</span>
          </Link>
          <Link to="payment">
            <img src={activity} alt="" />
            <span>Activity Log</span>
          </Link>
          <Link to="payment">
            <img src={credit_card} alt="" />
            <span>Web Collection/ API Site[PAYQUICK]</span>
          </Link>
          <Link to="payment">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/pos-terminal--v1.png"
              alt="pos-terminal--v1"
            />
            <span>Merchant/Agent POS Site[PAYPOS]</span>
          </Link>
          <Link to="payment">
            <img src={faq} alt="" />
            <span>Social & Marketplace Site[WAYAGRAM]</span>
          </Link>
          <Link to="payment">Logout</Link>
        </div>
      </aside>
      <div className="dashboard_content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
