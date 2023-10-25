import {combineReducers} from "redux";
import postReducer from "./post-reducer";


let rootReducers = combineReducers({
    postReducer:postReducer,

})

export default rootReducers;