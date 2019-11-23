import React from "react";
import { CustomButton } from "../CustomButton/CustomButton.component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CartItemList from "../cartItemList/Cart-item-list.component";
import { cartItems } from "../../redux/actions/cartItem.action";
import "./cart-dropdown.style.scss";

const renderDropDown = (payload, cartData) => {
  if (payload === "") {
    console.log(cartData);
    return (
      <div className="cart-dropdown">
        <div className="cart-items" style={{ overflowX: "hidden" }}>
          {cartData.length > 0 ? (
            cartData.map(data => {
              return <CartItemList data={data} />;
            })
          ) : (
            <span className="empty-message">Cart is empty</span>
          )}
        </div>

        <Link exact="true" to="/checkout">
          <CustomButton>GO TO CHECKOUT</CustomButton>
        </Link>
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

class CartDropdown extends React.Component {
  
  componentDidMount() {}

  render() {
    return renderDropDown(
      this.props.state.cartContainer.state.payload,
      this.props.state.cartItemList
    );
  }
}

const mapsStateToprops = state => ({
  state: state
});
const stateDispatchToprops = dispatch => ({
  setCartItems: state => dispatch(cartItems(state))
});

export default connect(mapsStateToprops, stateDispatchToprops)(CartDropdown);
