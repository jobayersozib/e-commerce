import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import cartContainerState from "../../redux/actions/cartContainerAction";
import { cartContainerHideOrShow } from "../../redux/actions/action.types";
import "./cart-icon.style.scss";

class CartIcon extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.state);
  }

  mouseOverhandler = () => {
    if (this.props.state.cartContainer.state.payload !== "") {
      this.props.cartContainerState({
        type: cartContainerHideOrShow,
        payload: ""
      });
    }
  };
  mouseOverOutHandler = () => {
    this.props.cartContainerState({
      type: cartContainerHideOrShow,
      payload: "display:none"
    });
  };

  render() {
    return (
      <div
        onMouseOver={this.mouseOverhandler}
        onMouseOut={this.mouseOverOutHandler}
        className="cart-icon"
      >
        <ShoppingBag className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    );
  }
}

export default connect(
  state => ({ state: state }),
  dispatch => ({
    cartContainerState: ShowOrHide => dispatch(cartContainerState(ShowOrHide))
  })
)(CartIcon);
