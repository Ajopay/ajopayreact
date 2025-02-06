import React, { useEffect, useState } from "react";
import person from "../SVG/person.svg";
import "../css/payment.css";
import south_west from "../SVG/south_west.svg";
import send from "../SVG/send.svg";
import qr_code from "../SVG/qr_code.svg";
import utility from "../SVG/utility.svg";
import tv from "../SVG/tv.svg";
import phone from "../SVG/phone.svg";
import data from "../SVG/wifi.svg";
import spade from "../SVG/spade.svg";
import add_plus from "../SVG/add_circle.svg";
import GooglePlay from "../SVG/GooglePlay-logo.07e71a08.svg";
import AppleStore from "../SVG/Apple-logo.3d32303b.svg";
import TransferModal from "./transferModal";

function Payment() {
  const [firstName, setFirstName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [availableBalance, setAvailableBalance] = useState("");
  const [totalBalance, setTotalBalance] = useState("");
  const [isTransferModalOpen, setTransferModalOpen] = useState(false);

  const openTransferModal = () => {
    setTransferModalOpen(true);
  };

  const closeTransferModal = () => {
    setTransferModalOpen(false);
  };

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    console.log(storedFirstName);

    if (!storedFirstName) {
      window.location.href = "user.html";
      console.log("No Name stored");
    } else {
      fetch(`http://localhost:8080/${storedFirstName}`)
        .then((response) => response.json())
        .then((data) => {
          setFirstName(data.firstName);
          setAccountNumber(data.accountNumber);
          setAvailableBalance(data.availableBalance);
          setTotalBalance(data.totalBalance);
          console.log(data);
        })
        .catch((error) => console.error("Error loading dashboard:", error));
    }
  }, []);

  return (
    <div className="payment">
      <header>
        <p>AjoPay</p>
        <div className="Profile_name">
          <img src={person} alt="" />
          <p>{firstName}</p>
        </div>
      </header>
      <div className="payment_main">
        <div className="payment_account_details">
          <div className="transaction_type">
            <span onClick={openTransferModal}>
              <img src={send} alt="" />
              Transfer
            </span>
            {isTransferModalOpen && (
              <TransferModal
                closeTransferModal={closeTransferModal}
                accountNumber={accountNumber}
              />
            )}
            <span>
              <img src={south_west} alt="" />
              Recieve
            </span>
            <span>
              <img src={south_west} alt="" />
              Request
            </span>
          </div>
          <div className="account_card">
            <div className="lhs">
              <div className="name">
                <img src={qr_code} alt="" />
                <span>Hello {firstName}</span>
              </div>
              <p>Available balance 1/1</p>
              <p>NGN {availableBalance}</p>
              <p>Total balance</p>
              <p>NGN {totalBalance}</p>
            </div>
            <div className="rhs">
              <p>Fund Account</p>
              <p>{accountNumber}</p>
            </div>
          </div>
        </div>
        <div className="payment_options">
          <div className="options">
            <img src={utility} alt="" />
            <p>Utility Bill</p>
          </div>
          <div className="options">
            <img src={tv} alt="" />
            <p>Cable</p>
          </div>
          <div className="options">
            <img src={phone} alt="" />
            <p>Airtime</p>
          </div>
          <div className="options">
            <img src={data} alt="" />
            <p>Data</p>
          </div>
          <div className="options">
            <img src={spade} alt="" />
            <p>Betting</p>
          </div>
          <div className="options">
            <img src={add_plus} alt="" />
            <p>Epin</p>
          </div>

          <div className="download">
            <h1>Download our App</h1>
            <p>
              Download our mobile application for better experience and to
              receive custom notifications in real time.
            </p>
            <div className="download_store">
              <img src={GooglePlay} alt="" />
              <img src={AppleStore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
