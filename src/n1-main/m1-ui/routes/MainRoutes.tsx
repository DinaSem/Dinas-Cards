import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {PATH} from "./Paths";
import LoginPage from "../../../n2-features/f1-auth/a1-login/LoginPage";
import Main from "../../../n2-features/f1-auth/Main";
import Registration from "../../../n2-features/f1-auth/a2-registration/Registration";
import PasswordRecoveryPage from "../../../n2-features/f1-auth/a3-forgot/PasswordRecoveryPage";
import ChangePasswordPage from "../../../n2-features/f1-auth/a4-setPass/ChangePasswordPage";
import ProfilePage from "../../../n2-features/f1-auth/a5-profile/ProfilePage";
import {PacksPage} from "../packs/PacksPage";
import CardsPage from "../packs/CardsPage";


const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.REGISTRATION}
                       element={<h2 style={{textAlign: "center"}}><Registration/></h2>}/>
                <Route path={PATH.LOGIN} element={<h2 style={{textAlign: "center"}}><LoginPage/></h2>}/>
                <Route path={PATH.PROFILE} element={<h2 style={{textAlign: "center"}}><ProfilePage/></h2>}/>
                {/*<Route path={PATH.MAIN} element={<h2 style={{textAlign: "center"}}><Main/></h2>}/>*/}
                <Route path={PATH.TEST} element={<h2 style={{textAlign: "center"}}>test</h2>}/>
                <Route path={PATH.CHANGE_PASSWORD}
                       element={<h2 style={{textAlign: "center"}}><ChangePasswordPage/></h2>}/>
                <Route path={PATH.PASSWORD_RECOVERY}
                       element={<h2 style={{textAlign: "center"}}><PasswordRecoveryPage/></h2>}/>
                <Route path={PATH.PACKS} element={<h2 style={{textAlign: "center"}}><PacksPage/></h2>}/>
                <Route path={PATH.CARDS} element={<h2 style={{textAlign: "center"}}><CardsPage/></h2>}/>
                {/*<Route path={'/404'} element={<h2 style={{textAlign: "center"}}><Error404/></h2>}/>*/}
                {/*<Route path='*' element={<Navigate to={'/404'}/>}/>*/}
            </Routes>
        </div>
    )
}

export default MainRoutes