import { combineReducers } from "redux";
import logRecuders from "./log-reducers";
import techReducers from "./tech-reducers";
export default combineReducers({ logRecuders, techReducers });
