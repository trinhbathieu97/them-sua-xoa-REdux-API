import { combineReducers } from "redux";
import todoReduce from "./index";


const rootReducer = combineReducers (
    {
        myTodo:todoReduce,
    }
);

export default rootReducer