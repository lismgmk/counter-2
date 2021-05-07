import {displayValueType} from "./counterReduser";

export enum ACTIONS_TYPE {
    CHANGE_VALUE = 'CHANGE_VALUE',
    CHANGE_ERROR_NUMBER = 'CHANGE_ERROR_NUMBER',
    CHANGE_DISABLE_INC = 'CHANGE_DISABLE_INC',
    CHANGE_DISABLE_RESET = 'CHANGE_DISABLE_RESET',
    CHANGE_DISABLE_SET = 'CHANGE_DISABLE_SET',
    CHANGE_ERROR_COUNTER = 'CHANGE_ERROR_COUNTER',
    CHANGE_VALUE_INPUT1 = 'CHANGE_VALUE_INPUT1',
    CHANGE_VALUE_INPUT2 = 'CHANGE_VALUE_INPUT2',
    CHANGE_ERROR_SETTING1 = 'CHANGE_ERROR_SETTING1',
    CHANGE_ERROR_SETTING2 = 'CHANGE_ERROR_SETTING2'
}

export type  valueInput2Type = {
    type: ACTIONS_TYPE.CHANGE_VALUE_INPUT2
    valueInput2: number
}
export type valueInput1Type = {
    type: ACTIONS_TYPE.CHANGE_VALUE_INPUT1
    valueInput1: number
}
export type valueType = {
    type: ACTIONS_TYPE.CHANGE_VALUE
    value: any
}
export type errorSetting1Type = {
    type: ACTIONS_TYPE.CHANGE_ERROR_SETTING1
    errorSetting1: boolean
}
export type errorSetting2Type = {
    type: ACTIONS_TYPE.CHANGE_ERROR_SETTING2
    errorSetting2: boolean
}
export type errorNumberType = {
    type: ACTIONS_TYPE.CHANGE_ERROR_NUMBER
    errorNumber: boolean
}
export type errorCounterType = {
    type: ACTIONS_TYPE.CHANGE_ERROR_COUNTER
    errorCounter: errorCounterType
}
export type disableSetType = {
    type: ACTIONS_TYPE.CHANGE_DISABLE_SET
    disableSet: boolean
}
export type disableResetType = {
    type: ACTIONS_TYPE.CHANGE_DISABLE_RESET
    disableReset: boolean
}
export type disableIncType = {
    type: ACTIONS_TYPE.CHANGE_DISABLE_INC
    disableInc: boolean
}



export const  valueInput2AC = (valueInput2: number) => {
    return({
        type: ACTIONS_TYPE.CHANGE_VALUE_INPUT2,
        valueInput2
    })
}
export const valueInput1AC = (valueInput1: number) => {
    return({
        type: ACTIONS_TYPE.CHANGE_VALUE_INPUT1,
        valueInput1
    })

}
export const valueAC = (value: any) => {
    return({
        type: ACTIONS_TYPE.CHANGE_VALUE,
        value
    })

}
export const errorSetting1AC = (errorSetting1: boolean) => {
    return({
        type: ACTIONS_TYPE.CHANGE_ERROR_SETTING1,
        errorSetting1
    })

}
export const errorSetting2AC = (errorSetting2: boolean) => {
    return({
        type: ACTIONS_TYPE.CHANGE_ERROR_SETTING2,
        errorSetting2
    })

}
export const errorNumberAC = (errorNumber: boolean) => {
    return({
        type: ACTIONS_TYPE.CHANGE_ERROR_NUMBER,
        errorNumber
    })

}
export const errorCounterAC = (errorCounter: string) => {
    return({
        type: ACTIONS_TYPE.CHANGE_ERROR_COUNTER,
        errorCounter
    })

}
export const disableSetAC = ( disableSet: boolean) => {
    return({
        type: ACTIONS_TYPE.CHANGE_DISABLE_SET,
        disableSet
    })

}
export const disableResetAC = (disableReset: boolean) => {
    return({
        type: ACTIONS_TYPE.CHANGE_DISABLE_RESET,
        disableReset
    })

}
export const disableIncAC = ( disableInc: boolean) => {
    return({
        type: ACTIONS_TYPE.CHANGE_DISABLE_INC,
        disableInc
    })

}


export type ActionCreatersType =
    valueInput2Type
    | valueInput1Type
    | valueType
    | errorSetting1Type
    | errorSetting2Type
    | errorNumberType
    | errorCounterType
    | disableSetType
    | disableResetType
    | disableIncType
