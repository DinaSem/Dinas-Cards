import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {forgotTC, resetNewPasswordTC, SendForgotPassStatusType} from "../../../n1-main/m3-dal/recoverReducer";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {PATH} from "../../../n1-main/m1-ui/routes/Paths";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {getAuthUserDataTC, setRegisterAC} from "../../../n1-main/m2-bll/registerReducer";
import {LoadingStatusType} from "../../../n1-main/m2-bll/loadingReducer";
import {ResponseErrorStateType} from "../../../n1-main/m2-bll/errorReducer";

const ChangePasswordPage = () => {

    const newPassStatus = useSelector<AppStoreType, SendForgotPassStatusType>(state => state.recover.isNewPassSet)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (newPassStatus === 'succeeded') navigate(PATH.LOGIN)
    }, [newPassStatus, navigate])

    const param = useParams<'token'>()
    const resetPasswordToken = param.token

    const [password, setPassword] = useState<string>('')

    const PasswordHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const onKeyPressHandler = useCallback(() => {
        dispatch(resetNewPasswordTC(password, resetPasswordToken))
    }, [dispatch, password, resetPasswordToken])
    return (<div>
Введите новый пароль

            <div>
                <input type={'text'}
                       value={password}
                       placeholder={'Enter password'}
                       onChange={PasswordHandler}
                />
            </div>

            <button onClick={onKeyPressHandler}>setPass</button>
            <div><NavLink to={PATH.LOGIN}>login</NavLink></div>

        </div>
    );
};

export default ChangePasswordPage;