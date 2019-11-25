import React from "react";

import "./CheckoutItem.style.scss";

const removeItem = () => {
  console.log("Clicked removed item");
};

const addItem = () => {
  console.log("Clicked add item");
};

const CheckoutItem = props => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={props.data.imageUrl} alt="item" />
    </div>
    <span className="name">{props.data.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem()}>
        &#10094;
      </div>
      <span className="value">{props.data.quantity}</span>
      <div className="arrow" onClick={() => addItem()}>
        &#10095;
      </div>
    </span>
    <span className="price">$&nbsp;{props.data.price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
