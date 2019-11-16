import React from "react";
import { CustomButton } from "../CustomButton/CustomButton.component";
import { connect } from "react-redux";
import CartItemList from "../cartItemList/Cart-item-list.component";
import { cartItems } from "../../redux/actions/cartItem.action";
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

class CartDropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setCartItems({
      productId: 2,
      productName: "Product name2",
      productUrl: ""
    });
    console.log(this.props);
  }

  render() {
    return renderDropDown(this.props.state.cartContainer.state.payload);
  }
}

const stateDispatchToprops = dispatch => ({
  setCartItems: state => dispatch(cartItems(state))
});

export default connect(
  state => ({ state: state }),
  stateDispatchToprops
)(CartDropdown);
