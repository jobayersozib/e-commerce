import React from "react";
import { CustomButton } from "../../../CustomButton/CustomButton.component";
import "./Collection-items.style.scss";
import { connect } from "react-redux";
import shopData from "../../ShopData";
import { cartItems } from "../../../../redux/actions/cartItem.action";

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  addToCart = productId => {
    console.log(productId);
    for (var data in shopData) {
      for (var product in shopData[data].items) {
        if (productId == shopData[data].items[product].id) {
          this.props.addProductTocart(shopData[data].items[product]);
        }
      }
    }
  };

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

const dispatchMapsToprops = dispatch => ({
  addProductTocart: productdata => dispatch(cartItems(productdata))
});

export default connect(null, dispatchMapsToprops)(CollectionItem);
