import React from "react";
import { CustomButton } from "../CustomButton/CustomButton.component";
import { connect } from "react-redux";
import CartItemList from "../cartItemList/Cart-item-list.component";
import { cartItems } from "../../redux/actions/cartItem.action";
import "./cart-dropdown.style.scss";

const renderDropDown = (payload, cartData) => {
  if (payload === "") {
    console.log(cartData);
    return (
      <div className="cart-dropdown">
        <div className="cart-items" style={{ overflowX: "hidden" }}>
          {cartData.map(data => {
            return <CartItemList imageUrl={data.imageUrl} />;
          })}
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
      productName: "Product name 2",
      productUrl: "",
      imageUrl: "https://via.placeholder.com/600/771796"
    });
    this.props.setCartItems({
      productId: 3,
      productName: "Product name 3",
      productUrl: "",
      imageUrl: "https://via.placeholder.com/600/24f355"
    });
  }

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
