import React from "react";
import { CustomButton } from "../../../CustomButton/CustomButton.component";
import "./Collection-items.style.scss";
import { connect } from "react-redux";
import shopData from "../../ShopData";
import { cartItems } from "../../../../redux/actions/cartItem.action";
import {cartItemIncrementAction} from '../../../../redux/actions/cartContainerAction'
import { cartItemsSelector } from "../../../../redux/selector/cart.selector";

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  addToCart = productId => {
    for (var data in shopData) {
      for (var product in shopData[data].items) {
        if (productId == shopData[data].items[product].id) {
          for (var i = 0; i < this.props.cartdata.length; i++) {
            if (this.props.cartdata[i].id == productId) {
              this.props.cartdata[i].quantity++;
              this.props.incrementProductQuantity(this.props.cartdata);
              return;
            }
          }
          shopData[data].items[product].quantity = 1;
          this.props.addProductTocart(shopData[data].items[product]);
        }
      }
    }
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    console.log(this.props.item)
    return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${this.props.item.imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{this.props.item.name}</span>
          <span className="price">${this.props.item.price}</span>
        </div>
        <div className="make-btn-center">
          <CustomButton onClick={e => this.addToCart(this.props.item.id)}>
            ADD TO CART
          </CustomButton>
        </div>
      </div>
    );
  }
}

const stateMapsToprops = state => {
  
return {
    cartdata: cartItemsSelector(state)
  };
};
const dispatchMapsToprops = dispatch => ({
  addProductTocart: productdata => dispatch(cartItems(productdata)),
  incrementProductQuantity:(cartData)=>dispatch(cartItemIncrementAction(cartData))
});

export default connect(stateMapsToprops, dispatchMapsToprops)(CollectionItem);
