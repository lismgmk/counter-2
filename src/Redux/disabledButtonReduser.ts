import {ACTIONS_TYPE} from "./actions";


export type initialStateType = {
    disabledButton: boolean
}

const initialState : initialStateType= {
    disabledButton: false
}

export const disabledButtonReduser = (state = initialState, action : ChangeDisabledButtonType ) => {
    switch (action.type){


        case ACTIONS_TYPE.CHANGE_DISABLED_BUTTON:
            return {
                ...state,
                disabledButton: action.disabledButton
            }
        default:
            return state
    }
}

export const ChangeDisabledButtonAC = (disabledButton: boolean): ChangeDisabledButtonType => {
    return ({
        type: ACTIONS_TYPE.CHANGE_DISABLED_BUTTON,
        disabledButton
    })
}
export type ChangeDisabledButtonType = {
    type: ACTIONS_TYPE.CHANGE_DISABLED_BUTTON,
    disabledButton: boolean
}
