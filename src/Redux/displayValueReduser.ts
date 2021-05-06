import { ACTIONS_TYPE} from "./actions";

export type displayValueType = 'pressSet' | 'incorrectValue' | number | 'good'


export type initialStateType = {
    displayValue: displayValueType
}

const initialState : initialStateType= {
    displayValue: 'pressSet'
}

export const displayValueReduser = (state = initialState, action : ChangeDisplayValueType ) => {
    switch (action.type){

        case ACTIONS_TYPE.CHANGE_DISPLAY_VALUE:
            return {
                ...state,
                displayValue: action.displayValue
            }

        default:
            return state
    }
}

export type ChangeDisplayValueType = {
    type: ACTIONS_TYPE.CHANGE_DISPLAY_VALUE,
    displayValue: displayValueType
}

export const ChangeDisplayValueAC = (displayValue: displayValueType): ChangeDisplayValueType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_DISPLAY_VALUE,
        displayValue
    })
}