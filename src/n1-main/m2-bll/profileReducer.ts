import {Dispatch} from 'redux'
import { authAPI } from '../m3-dal/auth-api'
// import {authsAPI} from "../m3-dal/cards-api";
// import {authAPI} from "../m3-dal/auth-api";

const initialState = {
    name: '',
    avatar: ''
}
type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: NewPassActionsType): InitialStateType => {
    switch (action.type) {

        case "CHANGE_USER_NAME":
            return {...state, name: action.name, avatar: action.avatar}
        default:
            return state
    }
}
// actions
export const changeUserNameAC = (name: string, avatar:string) =>
    ({type: 'CHANGE_USER_NAME', name, avatar} as const)

// thunks
export const changeUserNameTC = (name: string, avatar:string) => (dispatch: Dispatch<NewPassActionsType>) => {
authAPI.updateUser(name,avatar)
    .then((res) => {
        // console.log('res updateUserNameTC: ', res.data)
        dispatch(changeUserNameAC(name, avatar))
    })
}


// types
export type UpdateUseNameACType = ReturnType<typeof changeUserNameAC>
export type NewPassActionsType = UpdateUseNameACType
