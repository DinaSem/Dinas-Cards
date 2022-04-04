import React, {ChangeEvent, useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
import {forgotTC} from "../../../n1-main/m3-dal/recoverReducer";

const ChangePasswordPage = () => {
    const[password,setPassword] = useState('')
    const dispatch = useDispatch()

    // const onCangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.currentTarget.value)
    // }
const SendEmailOnClickHandler = {

}
    return (<div>
<div></div>
        </div>
    );
};

export default ChangePasswordPage;