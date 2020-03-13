import * as types from "../constants/ActionTypes";
import axios from "axios";
const api = "http://localhost:3900/";
// fetch data logs to api server
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
// add new data logs
// log là tham số truyền vào action ,là 1 obj gốm các dữ liệu đẩy lên server
export const addLogs = log => {
  return async dispatch => {
    try {
      setLoading();
      // thực hiện phương thức post
      const res = await axios.post(api + "logs", log);
      const data = res.data;
      dispatch({
        type: types.ADD_LOG,
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
