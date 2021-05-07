import {combineReducers, createStore} from "redux";
import {inputStartReduser} from "./inputStartReduser";
import {inputMaxReduser} from "./inputMaxReduser";
import {displayValueReduser} from "./displayValueReduser";
import {disabledButtonReduser} from "./disabledButtonReduser";

const redusers = combineReducers({
    inputStart: inputStartReduser,
    inputMax: inputMaxReduser,
    displayValue: displayValueReduser,
    disabledButton: disabledButtonReduser
})

export const store = createStore(redusers);

export type IGlobalState = ReturnType<typeof redusers>