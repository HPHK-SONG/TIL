import { combineReducers } from "redux";
import counter from "./counter";
import theme from "./theme";

export default combineReducers({
  counter,
  theme
});
