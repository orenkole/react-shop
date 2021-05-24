import { SET_USER_DATA } from "./user-action-creators";

const INITIAL_STATE = {
  userData: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}

export {userReducer};