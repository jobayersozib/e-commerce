import React from "react";
import { CustomButton } from "../../../CustomButton/CustomButton.component";
import "./Collection-items.style.scss";

const addToCart = productId => {
  console.log(productId);
};

const CollectionItem = ({ item }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <div className="make-btn-center">
        <CustomButton onClick={e => addToCart(item.id)}>
          ADD TO CART
        </CustomButton>
      </div>
    </div>
  );
};

export default CollectionItem;
