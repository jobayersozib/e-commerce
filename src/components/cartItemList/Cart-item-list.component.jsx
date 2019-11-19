import React from "react";
import "./cart-itemlist.style.scss";

const CartItemList = props => {
  return (
    <div className="cart-item">
      <img src={props.data.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{props.data.name}</span>
        <span className="price">
          {props.data.quantity} x {props.data.price}
        </span>
      </div>
    </div>
  );
};

export default CartItemList;
