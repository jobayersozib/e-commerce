import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import showcCartContainer from "./cart/cart.reducer";
import cartItemList from "../reducers/cart/item-in-list.reducer";
export default combineReducers({
  user: userReducer,
  cartContainer: showcCartContainer,
  cartItemList: cartItemList
});
