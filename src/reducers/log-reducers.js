import * as types from "../constants/ActionTypes";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOGS: {
      return { ...state, logs: action.payload, loading: false };
    }
    case types.SET_LOADING: {
      return { ...state, loading: true };
    }
    case types.LOGS_ERROR: {
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
