import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import beersReducer from './beersReducer';
import breweriesReducer from './breweriesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    beersReducer,
    breweriesReducer,
    userReducer,
    routing
});

export default rootReducer;
