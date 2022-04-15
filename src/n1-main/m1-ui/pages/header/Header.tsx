import React, {useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {PATH} from "../../routes/Paths";
import s from './header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../../../m2-bll/loginReducer";
import {AppStoreType} from "../../../m2-bll/store";
const Header = () => {
    const isLoggedIn = useSelector<AppStoreType,boolean>(state => state.login.isLoggedIn)
    //const info = useSelector<AppStoreType,string|null>(state => state.login.info)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutHandler = () => {
      dispatch(logoutTC())
    }

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate(PATH.LOGIN)
    //     } else return
    // }, [navigate, isLoggedIn])

    return (
        <div>
            <nav>
                <ul className={s.menu}>
                    <span style={{margin: '10px 10px'}}>
                        <NavLink to={PATH.TEST} className={''}>Test</NavLink>
                    </span>
                    <span style={{margin: '10px 10px'}}>
                        <NavLink to={PATH.PROFILE} className={''}>ProfilePage</NavLink>
                    </span>
                    <span style={{margin: '10px 10px'}}>
                        <NavLink to={PATH.MAIN} className={''}>Main</NavLink>
                    </span>
                    <span style={{margin: '10px 10px'}}>
                        <NavLink to={PATH.LOGIN} className={''}>Login</NavLink>
                    </span>
                    <span style={{margin: '10px 10px'}}>
                        <NavLink to={PATH.CHANGE_PASSWORD} className={''}>Change Password</NavLink>
                    </span>
                    <span style={{margin: '10px 10px'}}>
                        <NavLink to={PATH.PASSWORD_RECOVERY} className={''}>Password Recovery</NavLink>
                    </span>
                    <span style={{margin: '10px 10px'}}>
                        <NavLink to={PATH.REGISTRATION} className={''}>Registration</NavLink>
                    </span>
                    <span className={``}>
                        <NavLink to={''} className={''} onClick={logOutHandler}>LogOut</NavLink>
                    </span>

                    <li className={``}>
                        <NavLink to={PATH.PACKS} className={''}>Packs</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;