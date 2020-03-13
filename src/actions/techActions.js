import * as types from "../constants/ActionTypes";
import axios from "axios";
const api = "http://localhost:3900/";
// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get(api + "techs");
    const data = await res.data;

    dispatch({
      type: types.GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: types.TECHS_ERROR,
      payload: err.response
    });
  }
};

// Add technician to server
export const addTech = tech => async dispatch => {
  try {
    setLoading();

    const res = await axios.post(api + "techs", tech);
    const data = await res.data;

    dispatch({
      type: types.ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: types.TECHS_ERROR,
      payload: err.response
    });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    setLoading();

    await axios.delete(api + `techs/${id}`);

    dispatch({
      type: types.DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: types.TECHS_ERROR,
      payload: err.response
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: types.SET_LOADING
  };
};
