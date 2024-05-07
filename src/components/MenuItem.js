import React from 'react';
import '../css/MenuItem.css';

const MenuItem = ({ item, onOrder }) => {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price.toFixed(2)}</p>
      <button onClick={() => onOrder(item)}>Add to Order</button>
    </div>
  );
};

export default MenuItem;
