
import { homeReducer } from "../page/home/store";


import { combineReducers } from "redux-immutable"  


export default combineReducers({
  home: homeReducer
});