import {AxiosResponse} from "axios";
import {instance} from "./instance";
import {UserDataType} from "../m2-bll/loginReducer";

const model: RecoveryModelType = {
    email: '',
    from: "test-front-admin <neispravimayas1@gmail.com>",
    message: `<div style="background-color: lime; padding: 15px">
                        Password recovery link for project "Cards for test":
                        <a href='https://DinaSem.github.io/Dinas-Cards/#/change-pass/$token$'>
                        link</a>
                       </div >`
}
export const authAPI = {

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/me', {})
    },
    me() {
        return instance.post('auth/me', {})
    },
    profile(email: string, avatar: string) {
        return instance.post('auth/me', {email, avatar})
    },
    register(email: string, password: string) {
        return instance.post('auth/register', {email, password})
    },
    forgot(email:string) {
        return instance.post<{ model: RecoveryModelType, }, AxiosResponse<RecoverPassResponseType>>('auth/forgot', {...model, email:email})
    },
    newpass(password: string, resetPasswordToken: string | undefined) {
        return instance.post <{ password: string, resetPasswordToken: string | undefined },
            AxiosResponse<RecoverPassResponseType>>
        (`/auth/set-new-password`, {password, resetPasswordToken})
    },
    updateUser(name: string, avatar:string) {
        return instance.put<{ name: string, avatar:string}, AxiosResponse<ResponseType>>('auth/me', {name, avatar});
    },


}
type RecoveryModelType = {
    email: string,
    from: string,
    message: string
}
export type RecoverPassResponseType = {
    info: string
    error: string
}