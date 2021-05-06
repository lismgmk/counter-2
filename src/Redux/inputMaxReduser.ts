import { ACTIONS_TYPE} from "./actions";

export type initialStateType = {
    inputValue: number
    inputValueError: boolean
}

const initialState : initialStateType= {
    inputValue: 5,
    inputValueError: false
}

export const inputMaxReduser = (state = initialState, action : ChangeInputValueType | ChangeInputValueErrorType ) => {
    switch (action.type){

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

        default:
            return state
    }
}

export type ChangeInputValueType = {
    type: ACTIONS_TYPE.CHANGE_INPUT_VALUE,
    inputValue: number,
}

export const ChangeInputMaxValueAC = (inputValue: number): ChangeInputValueType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_INPUT_VALUE,
        inputValue
    })
}


export type ChangeInputValueErrorType = {
    type: ACTIONS_TYPE.CHANGE_INPUT_VALUE_ERROR,
    inputValueError: boolean
}

export const ChangeInputMaxValueErrorAC = ( inputValueError: boolean): ChangeInputValueErrorType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_INPUT_VALUE_ERROR,
        inputValueError
    })
}

