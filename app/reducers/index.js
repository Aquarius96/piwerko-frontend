import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import beersReducer from './beersReducer';

const rootReducer = combineReducers({
    beersReducer,
    routing
});

export default rootReducer;
