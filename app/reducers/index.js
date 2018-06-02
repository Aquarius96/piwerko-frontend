import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import beersReducer from './beersReducer';
import breweriesReducer from './breweriesReducer';
import userReducer from './userReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    beersReducer,
    breweriesReducer,
    userReducer,
    commentsReducer,
    routing
});

export default rootReducer;
