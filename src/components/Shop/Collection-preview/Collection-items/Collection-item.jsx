import React from "react";
import { CustomButton } from "../../../CustomButton/CustomButton.component";
import "./Collection-items.style.scss";
import { connect } from "react-redux";
import shopData from "../../ShopData";
import { cartItems } from "../../../../redux/actions/cartItem.action";
import {cartItemsSelector} from '../../../../redux/selector/cart.selector'

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
              let increaseQuantity = this.props.cartdata[i].quantity;
              window._.remove(this.props.cartdata, function(n) {
                return n.id == productId;
              });
              shopData[data].items[product].quantity = ++increaseQuantity;
              this.props.addProductTocart(shopData[data].items[product]);
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

const stateMapsToprops = state => ({
  cartdata: cartItemsSelector(state)
});
const dispatchMapsToprops = dispatch => ({
  addProductTocart: productdata => dispatch(cartItems(productdata))
});

export default connect(stateMapsToprops, dispatchMapsToprops)(CollectionItem);
