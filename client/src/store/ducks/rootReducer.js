import { combineReducers } from "redux";
import home from "./home";
import loading from "./loading";
import editor from "./editor";

const createRootReducer = () =>
  combineReducers({
    home,
    loading,
    editor
  });

export default createRootReducer;
