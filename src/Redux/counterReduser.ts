import {ActionCreatersType, ACTIONS_TYPE} from "./actions";

export type displayValueType = 'press Set' | 'incorrect Value' | number


export type initialStateType = {
    displayValue: displayValueType
    displayError: boolean
    inputValue: number
    inputValueError: boolean
    disabledButton: boolean
}

const initialState : initialStateType= {
    displayValue: 'press Set',
    displayError: false,
    inputValue: 0,
    inputValueError: false,
    disabledButton: false
}

export const counterReduser = (state = initialState, action : ActionCreatersType ) => {
    switch (action.type){

        case ACTIONS_TYPE.CHANGE_DISPLAY_VALUE:
            return {
                ...state,
                displayValue: action.displayValue
            }
        case ACTIONS_TYPE.CHANGE_DISPLAY_ERROR:
            return {
                ...state,
                displayError: action.displayError
            }
        case ACTIONS_TYPE.CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.inputValue
            }
        case ACTIONS_TYPE.CHANGE_INPUT_VALUE_ERROR:
            return {
                ...state,
                inputValueError: action.inputValueError
            }
        case ACTIONS_TYPE.CHANGE_DISABLED_BUTTON:
            return {
                ...state,
                disabledButton: action.disabledButton
            }
        default:
            return state
    }
}