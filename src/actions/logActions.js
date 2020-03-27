import * as types from "../constants/ActionTypes";
import axios from "axios";

const api = "http://localhost:3900/";
// fetch data logs to api server
export const getLogs = (page) => {
    return async dispatch => {
        const limit = 10;
        try {
            setLoading();
            const res = await fetch(api + "logs" + `?_page=${page}&_limit=${limit}`);
            console.log(api + "logs" + `?_page=${page}&_limit=${limit}`);
            const data = await res.json();
            const totalItems = await res.headers.get("X-Total-Count");
            dispatch({
                type: types.GET_LOGS,
                payload: data,
                page,
                totalItems
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
            const data = await res.data;
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
// delete log
// tham số id là id của item log cần xóa khi click
export const deleteLogs = id => {
    return async dispatch => {
        try {
            setLoading();
            // thực hiện phương thức post
            await axios.delete(api + `logs/${id}`);
            dispatch({
                type: types.DELETE_LOG,
                payload: id
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
// update log and push to server
// log là tham số là 1 obj gốm các dữ liệu điền vào sau khi enter sẽ dc update thay cho dữ liệu cũ, trong log gồm
// các trường, bao gồm trường id dùng để tìm ra log nào đang dc update
export const updateLogs = log => {
    return async dispatch => {
        try {
            setLoading();
            // thực hiện phương thức post
            const res = await axios.put(api + `logs/${log.id}`, log);
            const data = await res.data;
            dispatch({
                type: types.UPDATE_LOG,
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
// set current log (khi ấn vào nút sửa sẽ hiện data cũ)
// id là tham số chính là id của log cần chỉnh sửa, truyền id này vào thì sẽ get dc data của log cũ tương
// ứng vs id đó
export const setCurrentLog = id => {
    return async dispatch => {
        try {
            setLoading();
            // truyền id của log cần get data cũ về
            const res = await axios.get(api + `logs/${id}`);
            const data = await res.data;
            dispatch({
                type: types.SET_CURRENT,
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

//clear current log
export const clearCurrentLog = () => {
    return {
        type: types.CLEAR_CURRENT
    };
};

// search log
export const searchLogs = text => {
    return async dispatch => {
        try {
            setLoading();
            const res = await axios.get(api + `logs?q=${text}`);
            const data = await res.data;
            dispatch({
                type: types.SEARCH_LOGS,
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
