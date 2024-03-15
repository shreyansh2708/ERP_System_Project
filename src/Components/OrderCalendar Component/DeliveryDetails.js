import React from 'react';
import "./DeliveryDetails.css"

const DeliveryDetails = ({ orders, closeModal }) => {
  return (
    <div className="modal-calendar-container" onClick={closeModal}>
      <div className="calendar-modal">
        <h2>Delivery Details</h2>
        {orders.map(order => (
          <div key={order.id}>
            <div className="detail">
                <span className="value">{order.customerName}</span>
            </div>
            <div className="detail">
            <span className="value">Delivery Expected :{order.deliverDate}</span>
            </div>
            
          </div>
        ))}
  
      </div>
    </div>
  );
};

export default DeliveryDetails;
