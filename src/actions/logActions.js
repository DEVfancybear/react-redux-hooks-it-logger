import * as types from "../constants/ActionTypes";
import axios from "axios";
const api = "http://localhost:3900/";
export const getLogs = () => {
  return async dispatch => {
    try {
      setLoading();
      const res = await axios.get(api + "logs");
      const data = res.data;
      dispatch({
        type: types.GET_LOGS,
        payload: data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: types.LOGS_ERROR,
        payload: err.response
      });
    }
  };
};
// set loading to true
export const setLoading = () => {
  return {
    type: types.SET_LOADING
  };
};
