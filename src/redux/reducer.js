import { combineReducers } from "redux";
import userData from "./reducers/userReducers";

const rootReducer = combineReducers({
  userData,
});

export default rootReducer;
