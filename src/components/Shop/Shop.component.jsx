import React from "react";

import { Route , withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Collectionoverview from "./Collection-preview/Collection.component";
import { cartItems } from "../../redux/actions/cartItem.action";

import "./Shop.style.scss";
import Singleitem from "./Singleitem/Singleitem.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    console.log(this.props);
    
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
        <Route exact path={`${this.props.match.path}/:categoryID`} component={Singleitem}/>
        <Route exact path={`${this.props.match.path}`} component={Collectionoverview}/>
        
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
