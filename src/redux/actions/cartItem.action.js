import { cartItemLists } from "../actions/action.types";

const cartItems = data => {
  return {
    type: cartItemLists,
    payload: data
  };
};

export { cartItems };
