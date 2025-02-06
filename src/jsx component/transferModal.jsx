import React, { useState } from "react";
import "../css/Modal.css";

function TransferModal({ closeTransferModal, accountNumber }) {
  const [value, setValue] = useState("");

  const handleOpenTransferModal = (e) => {
    if (e.target.classList.contains("modal_overlay")) {
      closeTransferModal();
    }
  };

  const bankName = [
    {
      label: "Bank Name",
      value: 1,
    },
    {
      label: "United Bank of Africa (UBA)",
      value: 2,
    },
    {
      label: "Guaranty Trust Bank (GTB)",
      value: 3,
    },
    {
      label: "Union Bank",
      value: 4,
    },
    {
      label: "Providus Bank",
      value: 5,
    },
    {
      label: "Zenith Bank",
      value: 6,
    },
  ];

  return (
    <div className="modal_overlay" onClick={handleOpenTransferModal}>
      <div className="modal_content">
        <h1>Transfer Funds</h1>
        {/* <div className="transfer_other_banks">
          <img src={send} alt="" />
          <p>Transfer to Other Banks</p>
        </div> */}
        <form action="" className="transfer_modal_form">
          <div className="input_container">
            <input
              type="text"
              id="useraccountNumber"
              value={accountNumber}
              readOnly
            />
            <label htmlFor="useraccountNumber">Account Number of User</label>
          </div>
          <div className="input_container">
            <input type="text" id="recipentaccountNumber" />
            <label htmlFor="recipentaccountNumber">
              Account Number of Recipient
            </label>
          </div>
          <div className="input_container">
            <input type="text" id="amount" />
            <label htmlFor="amount">How much do you want to send</label>
          </div>
          <div className="input_container">
            <input type="text" id="recipentName" />
            <label htmlFor="recipentName">Name of Recipient</label>
          </div>
          <div className="input_container">
            <select value={value} onChange={(e) => setValue(e.target.value)}>
              {bankName.map((bank) => (
                <option key={bank.value} value={bank.value}>
                  {bank.label}
                </option>
              ))}
            </select>
            <label htmlFor="recipentBankName">Bank Name of Recipient</label>
          </div>
          <div className="input_container">
            <input type="text" id="description" />
            <label htmlFor="description">Description</label>
          </div>
          <div className="input_container">
            <input type="password" id="pin" />
            <label htmlFor="pin">pin</label>
          </div>

          <button>Transfer</button>
        </form>
      </div>
    </div>
  );
}

export default TransferModal;
