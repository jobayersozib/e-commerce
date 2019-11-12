import { userTypeAction } from "./action.types";

export const setUserState = user => ({
  type: userTypeAction,
  payload: user
});
