import { combineReducers } from "redux";

import category from "./home/reducer";
import joke from "./joke/reducer";

export default combineReducers({
  category,
  joke,
});
