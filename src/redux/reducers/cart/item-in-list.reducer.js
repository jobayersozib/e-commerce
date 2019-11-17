import { cartItemLists } from "../../actions/action.types";

const INITIAL_STATE = [
  {
    productId: 3,
    productName: "Product name 3",
    productUrl: "",
    imageUrl: "https://via.placeholder.com/600/92c952"
  }
];

const cartItemList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartItemLists:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default cartItemList;
