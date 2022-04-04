import {loadingAC} from "./loadingReducer";
import {authAPI} from "../m3-dal/auth-api";
import {Dispatch} from "redux";


type InitialStateType = {
    user: UserDataType | null,
    isRegister: boolean
}

const initialState = {
    user: null,
    isRegister: false
}

export type UserDataType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number,

    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
    error?: string
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_REGISTER':
                return {...state, isRegister: action.isRegister}


        default:
            return state
    }
}
export type setRegisterACType = ReturnType<typeof setRegisterAC>
type ActionsType = setRegisterACType


export const setRegisterAC = (isRegister: boolean) => (
    {type: 'SET_REGISTER', isRegister}) as const


export const getAuthUserDataTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(loadingAC('loading'))
    authAPI.register(email, password)
        .then(response => {
                console.log('login',response.data)
                dispatch(setRegisterAC(true))
            }
        ).catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        console.log('login error',error)
    }).finally(() => {
        dispatch(loadingAC('succeeded'))
    })
}



