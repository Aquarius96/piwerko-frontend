import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import beersReducer from './beersReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    beersReducer,
    userReducer,
    routing
});

export default rootReducer;
