import { cartContainerHideOrShow } from "../../actions/action.types";
const INITIAL_STATE = {
  state: {
    payload: "display:none"
  }
};

const showcCartContainer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartContainerHideOrShow:
      return {
        state: action.payload
      };

    default:
      return state;
  }
};

export default showcCartContainer;
