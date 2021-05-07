import {ActionCreatersType, ACTIONS_TYPE} from "./actions";
import {errorCounterType} from "../App";

export type displayValueType = 'press Set' | 'incorrect Value' | number


export type initialStateType = {
    valueInput2: number
    value: any,
    valueInput1: number,
    errorSetting1: boolean,
    errorSetting2: boolean,
    errorNumber: boolean,
    errorCounter: errorCounterType,
    disableSet: boolean,
    disableReset: boolean,
    disableInc: boolean
}

const initialState : initialStateType= {
        value: 1, // displa count
        valueInput1: 3, // max
        valueInput2: 1, // min
        isInputErrorStyle errorSetting1: false, // ???
        errorSetting2: false, // ???
        is errorNumber: false, // +
        errorCounter: 'good', // +
        disableSet: true,
        disableReset: false,
        disableInc: false
}

export const counterReduser = (state = initialState, action : ActionCreatersType ): initialStateType => {
    switch (action.type){

        case ACTIONS_TYPE.CHANGE_VALUE_INPUT2:
            return {
                ...state,
                valueInput2: action.valueInput2
            }

        case ACTIONS_TYPE.CHANGE_VALUE_INPUT1:
            return {
                ...state,
                valueInput1: action.valueInput1
            }

        case ACTIONS_TYPE.CHANGE_VALUE:
            return {
                ...state,
                value: action.value
            }

        case ACTIONS_TYPE.CHANGE_ERROR_SETTING1:
            return {
                ...state,
                errorSetting1: action.errorSetting1
            }

        case ACTIONS_TYPE.CHANGE_ERROR_SETTING2:
            return {
                ...state,
                errorSetting2: action.errorSetting2
            }


        case ACTIONS_TYPE.CHANGE_ERROR_NUMBER:
            return {
                ...state,
                errorNumber: action.errorNumber
            }


        case ACTIONS_TYPE.CHANGE_ERROR_COUNTER:
            return {
                ...state,
                errorCounter: action.errorCounter
            }


        case ACTIONS_TYPE.CHANGE_DISABLE_SET:
            return {
                ...state,
                disableSet: action.disableSet
            }

        case ACTIONS_TYPE.CHANGE_DISABLE_RESET:
            return {
                ...state,
                disableReset: action.disableReset
            }

        case ACTIONS_TYPE.CHANGE_DISABLE_INC:
            return {
                ...state,
                disableInc: action.disableInc
            }

        default:

            return state
    }
}