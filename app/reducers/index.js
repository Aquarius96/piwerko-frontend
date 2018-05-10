import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const beers = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_BEERS_DATA:
            return action.data;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    beers,
    filter,
    routing
});

export default rootReducer;
