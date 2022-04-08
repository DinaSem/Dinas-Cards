import React, {ChangeEvent, useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "../../../n1-main/m1-ui/routes/Paths";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserDataTC} from "../../../n1-main/m2-bll/loginReducer";
import {AppStoreType} from "../../../n1-main/m2-bll/store";

const LoginPage = () => {
    const[email, setEmail]= useState('neispravimayas1@gmail.com')
    const[password, setPassword]= useState('12345678')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const isLoggedIn = useSelector<AppStoreType,boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppStoreType,string|null>(state => state.login.error)
    const dispatch = useDispatch()
    const navigate = useNavigate()

const EmailHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
}
    const PasswordHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const loginHandler = ()=>{
        dispatch(getAuthUserDataTC(email, password, rememberMe))
    }
    useEffect(() => {
        if (isLoggedIn) {
            navigate(PATH.PROFILE)
        } else return
    }, [navigate, isLoggedIn])


    return (
        <div>

            LOGIN PAGE
            <div style={{color: "red", fontSize:"15px"}}>{error}</div>
            <div>
                <input type={'text'}
                       value={email}
                       placeholder={'Enter email'}
                       onChange={EmailHandler}
                />
            </div>
            <div>
                <input type={'text'}
                       value={password}
                       placeholder={'Enter password'}
                       onChange={PasswordHandler}
                />
            </div>

            <div><NavLink to={PATH.PASSWORD_RECOVERY}>forgot?</NavLink></div>
            <button onClick={loginHandler}>sign in</button>
            <div><NavLink to={PATH.REGISTRATION}>register</NavLink></div>
        </div>
    );
};

export default LoginPage;