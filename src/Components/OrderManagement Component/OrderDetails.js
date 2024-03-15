import React from 'react';
import "./OrderDetails.css"

const OrderDetails = ({ order, closeModal }) => {
  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal">
        <h2>Order Details</h2>
        <div className="detail">
          <span className="label">Order ID:</span>
          <span className="value">{order.id}</span>
        </div>
        <div className="detail">
          <span className="label">Customer Name:</span>
          <span className="value">{order.customerName}</span>
        </div>
        <div className="detail">
          <span className="label">Date:</span>
          <span className="value">{order.date}</span>
        </div>
        <div className="detail">
          <span className="label">Merchant Address:</span>
          <span className="value">{order.senderAddr}</span>
        </div>
        <div className="detail">
          <span className="label">Customer Address:</span>
          <span className="value">{order.receiverAddr}</span>
        </div>
        <div className="detail">
          <span className="label">Payment Mode:</span>
          <span className="value">{order.payMode}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
