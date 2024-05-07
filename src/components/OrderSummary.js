import React from 'react';
import '../css/OrderSummary.css';

const OrderSummary = ({ orders, totalAmount }) => {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {orders.map((order, index) => (
        <div key={index}>
          <p>
            {order.name} - ₹{order.price.toFixed(2)}
          </p>
        </div>
      ))}
      <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>
    </div>
  );
};

export default OrderSummary;
