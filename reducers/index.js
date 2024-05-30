import navReducer from './nav'
import cbReducer from './shbutton';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    nav: navReducer,
    cb: cbReducer
});

export default rootReducer