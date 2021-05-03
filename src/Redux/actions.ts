import {displayValueType} from "./counterReduser";

export enum ACTIONS_TYPE {
    CHANGE_DISPLAY_VALUE = 'CHANGE_DISPLAY_VALUE',
    CHANGE_DISPLAY_ERROR = 'CHANGE_DISPLAY_ERROR',
    CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE',
    CHANGE_INPUT_VALUE_ERROR = 'CHANGE_INPUT_VALUE_ERROR',
    CHANGE_DISABLED_BUTTON = 'CHANGE_DISABLED_BUTTON'
}

export type ChangeDisplayValueType = {
    type: ACTIONS_TYPE.CHANGE_DISPLAY_VALUE,
    displayValue: displayValueType
}

export type ChangeDisplayErrorType = {
    type: ACTIONS_TYPE.CHANGE_DISPLAY_ERROR,
    displayError: boolean
}

export type ChangeInputValueType = {
    type: ACTIONS_TYPE.CHANGE_INPUT_VALUE,
    inputValue: number
}

export type ChangeInputValueErrorType = {
    type: ACTIONS_TYPE.CHANGE_INPUT_VALUE_ERROR,
    inputValueError: boolean
}

export type ChangeDisabledButtonType = {
    type: ACTIONS_TYPE.CHANGE_DISABLED_BUTTON,
    disabledButton: boolean
}

export const ChangeDisplayValueAC = (displayValue: displayValueType): ChangeDisplayValueType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_DISPLAY_VALUE,
        displayValue
    })
}
export const ChangeDisplayErrorAC = (displayError: boolean): ChangeDisplayErrorType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_DISPLAY_ERROR,
        displayError
    })
}
export const ChangeInputValueAC = (inputValue: number): ChangeInputValueType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_INPUT_VALUE,
        inputValue
    })
}
export const ChangeInputValueErrorAC = (inputValueError: boolean): ChangeInputValueErrorType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_INPUT_VALUE_ERROR,
        inputValueError
    })
}
export const ChangeDisabledButtonAC = (disabledButton: boolean): ChangeDisabledButtonType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_DISABLED_BUTTON,
        disabledButton
    })
}

export type ActionCreatersType = ChangeDisplayValueType | ChangeDisplayErrorType | ChangeInputValueType | ChangeInputValueErrorType
    | ChangeDisabledButtonType