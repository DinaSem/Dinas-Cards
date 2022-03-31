import React, {ChangeEvent, useState} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../../n1-main/m1-ui/routes/Paths";


const PasswordRecoveryPage = () => {

    const[email, setEmail]= useState('')
    const emailHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
        const emailOnClickHandler = () => {
        }

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