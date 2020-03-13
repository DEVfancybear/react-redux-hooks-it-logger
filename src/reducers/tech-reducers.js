import * as types from "../constants/ActionTypes";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case types.ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    case types.DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
