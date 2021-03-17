import counterReducer from "./counter";
import islogged from "./loged";


import {combineReducers} from 'redux'


const allReducers =combineReducers({
    counter:counterReducer,
    islogged:islogged
})
export default allReducers