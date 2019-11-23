import { cartContainerHideOrShow,cartItemIncrement } from "../actions/action.types";

const cartContainerState = payload => {
  return {
    type: cartContainerHideOrShow,
    payload: payload
  };
};

const cartItemIncrementAction=(data)=>{
  
  return(
    {
      type:cartItemIncrement,
      payload:data
    }
  )
}
export {cartItemIncrementAction};
export default cartContainerState;
