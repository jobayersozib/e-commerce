import React from "react";
import "./cart-itemlist.style.scss";

const CartItemList = props => {
  return (
    <div className="cart-item">
      <img src={props.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">Product name</span>
        <span className="price">2 x $10</span>
      </div>
    </div>
  );
};

export default CartItemList;
