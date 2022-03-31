import {AxiosResponse} from "axios";
import {instance} from "./instance";
import {UserDataType} from "../m2-bll/loginReducer";

// const model1: RecoveryModelType = {
//     email: '',
//     from: "test-front-admin <neispravimayas1@gmail.com>",
//     message: `<div style="background-color: lime; padding: 15px">
//                         Password recovery link for project "Cards for test":
//                         <a href='https://vladimirgromyko.github.io/cards-for-test#/change-pass/$token$'>
// <!--                        <a href='http://localhost:3000/cards-for-test#/change-pass/$token$'>-->
//                         link</a>
//                        </div >`
// }
export const authAPI = {

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/me', {})
    },
    me(){
        return instance.post('auth/me', {})
    },
    register(email: string, password: string) {
        return instance.post('auth/register', {email, password})
    },

}
