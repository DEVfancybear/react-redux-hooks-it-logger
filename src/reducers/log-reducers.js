import * as types from "../constants/ActionTypes";
// action.payload là action đã được dispatch ở folder actions có 1 tham số payload tương ứng vs cái type của nó
const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null,
    page: null,
    totalItems: ""
};
export default (state = initialState, action) => {
    switch (action.type) {
        // xử lí get data logs trên server
        case types.GET_LOGS: {
            console.log(action.totalItems)
            return {
                ...state, logs: action.payload, loading: false, page: action.page,
                totalItems: action.totalItems
            };
        }
        // xử lí tạo mới data logs rồi đưa lên server
        case types.ADD_LOG: {
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        }
        case types.DELETE_LOG: {
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            };
        }
        // xử lí hiển thị dữ liệu cũ khi click vào sẽ hiện
        case types.SET_CURRENT: {
            return {
                ...state,
                current: action.payload
            };
        }
        case types.CLEAR_CURRENT: {
            return {
                ...state,
                current: null
            };
        }
        // xử lí update dữ liệu và đẩy lên server
        case types.UPDATE_LOG: {
            return {
                ...state,
                logs: state.logs.map(log =>
                    log.id === action.payload.id ? action.payload : log
                )
            };
        }
        // search log
        case types.SEARCH_LOGS: {
            return {
                ...state,
                logs: action.payload
            };
        }
        case types.SET_LOADING: {
            return {...state, loading: true};
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
