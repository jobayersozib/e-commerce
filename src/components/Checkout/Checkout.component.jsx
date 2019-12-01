import React from "react";
import "./Checkout.style.scss";
import { connect } from "react-redux";
import cartContainerState from "../../redux/actions/cartContainerAction";
import CheckoutItem from "../Checkout/CheckoutItem/CheckoutItem.component";
import Paymentform from "../paymentform/Paymentform.component";

class Checkout extends React.Component {
  componentDidMount() {
    this.props.dispatch(cartContainerState());
  }
  calculateTotal() {
    let total = 0;
    for (var i = 0; i < this.props.cartItems.length; i++) {
      total += this.props.cartItems[i].quantity * this.props.cartItems[i].price;
    }

    return total;
  }
  render() {
    return (
      <div>
        <Paymentform />
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
          {this.props.cartItems.map(data => {
            return <CheckoutItem key={data.id} data={data} />;
          })}

          <div className="total">TOTAL: ${this.calculateTotal()}</div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  cartItems: state.cartItemList
}))(Checkout);
