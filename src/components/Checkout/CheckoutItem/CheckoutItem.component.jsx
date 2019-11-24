import React from "react";

import "./CheckoutItem.style.scss";

const CheckoutItem = props => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={props.data.imageUrl} alt="item" />
    </div>
    <span className="name">{props.data.name}</span>
    <span className="quantity">{props.data.quantity}</span>
    <span className="price">{props.data.price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
