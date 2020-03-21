import { combineReducers } from "redux";

import item from "./items";
import error from "./errors";

export default combineReducers({ item, error });