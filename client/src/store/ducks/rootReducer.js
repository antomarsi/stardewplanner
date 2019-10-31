import { combineReducers } from "redux";
import home from "./home";
import loading from "./loading";

const createRootReducer = () =>
  combineReducers({
    home,
    loading
  });

export default createRootReducer;
