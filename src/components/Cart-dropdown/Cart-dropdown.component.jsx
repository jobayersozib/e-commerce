import React from "react";
import { CustomButton } from "../CustomButton/CustomButton.component";
import { connect } from "react-redux";
import "./cart-dropdown.style.scss";

function renderDropDown(payload) {
  if (payload === "") {
    return (
      <div className="cart-dropdown">
        <div className="cart-items" style={{ overflowX: "hidden" }}></div>
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
}

const CartDropdown = props => {
  console.log(props.state.cartContainer.state.payload);
  return renderDropDown(props.state.cartContainer.state.payload);
};

export default connect(state => ({ state: state }), null)(CartDropdown);
