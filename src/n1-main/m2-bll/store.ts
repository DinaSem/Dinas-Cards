import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import thunkMiddleware from 'redux-thunk'
import {registerReducer} from "./registerReducer";
import {recoverReducer} from "../m3-dal/recoverReducer";


const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    recover: recoverReducer,


})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
