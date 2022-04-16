import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import {registerReducer} from "./registerReducer";
import {recoverReducer} from "../m3-dal/recoverReducer";
import {packsReducer} from "./packsReducer";
import {cardsReducer} from "./cardsReducer";
import {cardsReducer1} from "./cardsReducer1";


const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    recover: recoverReducer,
    packs: packsReducer,
    cards: cardsReducer,
    cards1: cardsReducer1,


})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store

export type AppStoreType = ReturnType<typeof reducers>
type AppActionType= any

export type ThunkType = ThunkAction<void, AppStoreType, unknown, AppActionType>

// @ts-ignore
window.store = store // for dev
