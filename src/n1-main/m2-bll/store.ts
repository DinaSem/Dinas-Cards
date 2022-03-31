import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import thunkMiddleware from 'redux-thunk'
import {registerReducer} from "./registerReducer";


const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,

})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
