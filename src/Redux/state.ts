import {combineReducers, createStore} from "redux";
import {counterReduser} from "./counterReduser";

const redusers = combineReducers({
    counter: counterReduser
})

export const store = createStore(redusers);

export type IGlobalState = ReturnType<typeof redusers>