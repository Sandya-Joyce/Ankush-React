import { combineReducers } from "redux";
import statusReducer from "./statusReducer";

const reducers = combineReducers({
  status: statusReducer,
});

export default reducers;
