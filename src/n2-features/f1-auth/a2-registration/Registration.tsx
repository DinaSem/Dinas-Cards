import React, {ChangeEvent, useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "../../../n1-main/m1-ui/routes/Paths";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {getAuthUserDataTC, setRegisterAC} from "../../../n1-main/m2-bll/registerReducer";

const Registration = () => {

    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const[confirmPass, setConfirmPassPass]= useState('')

    const isLoggedIn = useSelector<AppStoreType,boolean>(state => state.login.isLoggedIn)
    const isRegistred = useSelector<AppStoreType,boolean>(state => state.register.isRegister)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const EmailHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const PasswordHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const ConfirmPassHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setConfirmPassPass(e.currentTarget.value)
    }

    const registerHandler = () => {
        if(password===confirmPass){
            dispatch(getAuthUserDataTC(email,password))
        }
    }
    useEffect(() => {
        if (isRegistred) {
            dispatch(setRegisterAC(false))
            navigate(PATH.LOGIN)
        }
    }, [dispatch, isRegistred, navigate])

    return (
        <div>
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
            <div>
                <input type={'text'}
                       value={confirmPass}
                       placeholder={'Confirm password'}
                       onChange={ConfirmPassHandler}
                />
            </div>
            <button onClick={registerHandler}>sign up</button>
            <div><NavLink to={PATH.LOGIN}>login</NavLink></div>

        </div>
    );
};

export default Registration;