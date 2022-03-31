import React, {useCallback, useEffect} from 'react'
import './App.css'
import Header from "../pages/header/Header";
import MainRoutes from "../routes/MainRoutes";
import Main from "../../../n2-features/f1-auth/Main";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../m2-bll/store";


const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>

    );
}

export default App;
