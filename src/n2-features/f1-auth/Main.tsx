import React, {useEffect} from 'react';
import Header from "../../n1-main/m1-ui/pages/header/Header";
import MainRoutes from "../../n1-main/m1-ui/routes/MainRoutes";
import {useDispatch} from "react-redux";
import {initializeMainTC} from "../../n1-main/m2-bll/loginReducer";

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeMainTC())
    }, [])

    return (
        <>
            <Header/>
            <MainRoutes/>
        </>
    );
};
export default Main;