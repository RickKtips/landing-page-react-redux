import { combineReducers } from "redux";

import sectionReducer from "./sections/slice";

const rootReducer = combineReducers({ sectionReducer });

export default rootReducer;
