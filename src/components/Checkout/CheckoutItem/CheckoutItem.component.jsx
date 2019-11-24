import React from "react";

import "./CheckoutItem.style.scss";

const CheckoutItem = props => (
  <div className="checkout-item">
    <div className="image-container">
      <img src="" alt="item" />
    </div>
    <span className="name">name</span>
    <span className="quantity">2</span>
    <span className="price">10</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
