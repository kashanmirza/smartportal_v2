import * as ActionTypes from "./ActionTypes";
export const Services = (
  state = {
    isLoading: true,
    errMess: "",
    services: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_SERVICES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        services: action.payload
      };
    case ActionTypes.SERVICES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: "",
        services: []
      };
    case ActionTypes.SERVICES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        services: []
      };
    default:
      return state;
  }
};
