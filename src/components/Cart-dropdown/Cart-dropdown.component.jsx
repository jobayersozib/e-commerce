import React from "react";
import { CustomButton } from "../CustomButton/CustomButton.component";
import { connect } from "react-redux";
import CartItemList from "../cartItemList/Cart-item-list.component";
import "./cart-dropdown.style.scss";

const renderDropDown = payload => {
  if (payload === "") {
    return (
      <div className="cart-dropdown">
        <div className="cart-items" style={{ overflowX: "hidden" }}>
          <CartItemList />
          <CartItemList />
          <CartItemList />
          <CartItemList />
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
  } else {
    return (
      <div
        className="cart-dropdown"
        style={{ border: "none", zIndex: "-1" }}
      ></div>
    );
  }
};

const CartDropdown = props => {
  console.log(props.state.cartContainer.state.payload);
  return renderDropDown(props.state.cartContainer.state.payload);
};

export default connect(state => ({ state: state }), null)(CartDropdown);
