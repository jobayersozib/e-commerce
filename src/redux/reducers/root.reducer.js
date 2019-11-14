import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import showcCartContainer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cartContainer: showcCartContainer
});
