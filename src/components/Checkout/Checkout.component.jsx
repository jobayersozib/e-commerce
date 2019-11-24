import React from "react";
import "./Checkout.style.scss";
import { connect } from "react-redux";
import CheckoutItem from "../Checkout/CheckoutItem/CheckoutItem.component";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        <CheckoutItem />
        <div className="total">TOTAL: $100</div>
      </div>
    );
  }
}

export default connect(state => ({
  state: state
}))(Checkout);
