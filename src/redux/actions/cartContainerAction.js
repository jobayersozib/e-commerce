import { cartContainerHideOrShow } from "../actions/action.types";

const cartContainerState = payload => {
  return {
    type: cartContainerHideOrShow,
    payload: payload
  };
};

export default cartContainerState;
