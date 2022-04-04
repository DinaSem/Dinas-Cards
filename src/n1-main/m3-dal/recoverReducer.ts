import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {loadingAC, LoadingACType} from "../m2-bll/loadingReducer";
import {authAPI} from "./auth-api";
import {responseErrorAC, ResponseErrorACType} from "../m2-bll/errorReducer";
export type SendForgotPassStatusType = 'succeeded' | 'failed'

export type authStateType = {
    isInstructionEmailed: SendForgotPassStatusType
    isNewPassSet: SendForgotPassStatusType
}
const initState: authStateType = {
    isInstructionEmailed: 'failed',
    isNewPassSet: 'failed',
};


export const recoverReducer = (state: authStateType = initState,
                             action: authReducerType): authStateType => {
    switch (action.type) {
        case "AUTH/FORGOT-PASS-STATUS": {
            return {...state, isInstructionEmailed: action.status}
        }
        case "AUTH/NEW-PASS-STATUS": {
            return {...state, isNewPassSet: action.status}
        }
        default:
            return state;
    }
};

export type SetForgotPassACType = ReturnType<typeof setForgotPassStatusAC>
export type ResetNewPassACType = ReturnType<typeof resetNewPassStatusAC>

export type authReducerType = SetForgotPassACType
    | ResetNewPassACType
    | LoadingACType
    | ResponseErrorACType

export const setForgotPassStatusAC = (status: SendForgotPassStatusType) =>
    ({type: 'AUTH/FORGOT-PASS-STATUS', status} as const)

export const resetNewPassStatusAC = (status: SendForgotPassStatusType) =>
    ({type: 'AUTH/NEW-PASS-STATUS', status} as const)



export const forgotTC = (email: string) => (dispatch: Dispatch<authReducerType>) => {
    dispatch(loadingAC('loading'))
    authAPI.forgot(email)
        .then((res) => {
            dispatch(setForgotPassStatusAC('succeeded'))
            // dispatch(setForgotPassStatusAC('succeeded'))
            setTimeout(()=>{
                dispatch(setForgotPassStatusAC('failed'))
            },3000)
        })
        .catch((err: AxiosError) => {
            dispatch(responseErrorAC(true, 'passwordRec', err.response?.data.error))
            setTimeout(()=>{
                dispatch(responseErrorAC(false, 'passwordRec', ''))
            },3000)

        })
        .finally(() => {
            dispatch(loadingAC('succeeded'))
        })
}

export const resetNewPasswordTC = (password: string, resetPasswordToken: string | undefined) =>
    (dispatch: Dispatch<authReducerType>) => {
        dispatch(loadingAC('loading'))
        authAPI.newpass(password, resetPasswordToken)
            .then((res) => {
                dispatch(resetNewPassStatusAC('succeeded'))
                setTimeout(()=>{
                    dispatch(resetNewPassStatusAC('failed'))
                },3000)
            })
            .catch((err: AxiosError) => {
                dispatch(responseErrorAC(true, 'changePas', err.response?.data.error))
                setTimeout(()=>{
                    dispatch(responseErrorAC(false, 'changePas', ''))
                },3000)
            })
            .finally(() => {
                dispatch(loadingAC('succeeded'))
            })
    }




