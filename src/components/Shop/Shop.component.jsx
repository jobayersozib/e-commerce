import React from "react";
import SHOP_DATA from "./ShopData";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Collectionpreview from "./Collection-preview/Collection.component";
import { cartItems } from "../../redux/actions/cartItem.action";
import "./Shop.style.scss";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: SHOP_DATA
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.state.section);
  }

  displayLoggedInName = () => {
    if (this.props.state.user.currentUser != null) {
      return (
        <h5>
          Logged in as:&nbsp;
          {this.props.state.user.currentUser.userInfo.displayName}
        </h5>
      );
    }
  };

  addTocartHandler = e => {
    this.props.addItemToCart({
      productId: 2,
      productName: "Product name 2",
      productUrl: "",
      quantity: 1,
      imageUrl: "https://via.placeholder.com/600/771796"
    });
  };

  render() {
    return (
      <div>
        {this.displayLoggedInName()}
        <div className="shop-page">
          {this.state.section.map(collection => {
            return (
              <Collectionpreview
                key={collection.id}
                title={collection.title}
                items={collection.items.slice(0, 4)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const stateMapsToProps = state => ({
  state: state
});

const dispatchMapsToProps = dispatch => ({
  addItemToCart: data => dispatch(cartItems(data))
});

export default connect(stateMapsToProps, dispatchMapsToProps)(withRouter(Shop));
