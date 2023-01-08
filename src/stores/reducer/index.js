import { combineReducers } from "redux";

import posts from "./posts";
import counter from "./counter";

export default combineReducers({
  posts,
  counter,
});
