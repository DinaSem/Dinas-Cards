import React, {ChangeEvent, useCallback, useState} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../../n1-main/m1-ui/routes/Paths";
import {forgotTC} from "../../../n1-main/m3-dal/recoverReducer";
import {useDispatch} from "react-redux";


const PasswordRecoveryPage = () => {

    const[email, setEmail]= useState('')
    const dispatch = useDispatch()

    const emailHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
        const emailOnClickHandler = useCallback(() => {
            dispatch(forgotTC(email))
        }, [dispatch, email])

    return (
        <div>
            <div>
                <input type={'text'}
                       value={email}
                       placeholder={'email'}
                       onChange={emailHandler}
                />
            </div>
            <button onClick={emailOnClickHandler}>sign up</button>
            <div><NavLink to={PATH.LOGIN}>login</NavLink></div>
        </div>
    );
};

export default PasswordRecoveryPage;