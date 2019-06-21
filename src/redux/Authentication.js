import * as ActionTypes from "./ActionTypes";
import { setToken, isAuthenticated } from "../shared/auth";

const initialstate = {
  isLoading: true,
  errMess: "",
  isAuthenticated: false
};

export const Authentication = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      if (
        action.payload.username === "admin" &&
        action.payload.password === "admin"
      ) {
        setToken("1234567");
        
        return {
          ...state,
          isLoading: false,
          errMess: null,
          isAuthenticated: true
        };
      } else {
        return {
          ...state,
          isLoading: false,
          errMess: null,
          isAuthenticated: false
        };
      }
    default:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        isAuthenticated: isAuthenticated
      };
  }
};
