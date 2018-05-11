import * as types from '../types/beers';

const initialState = {
    beers: [],
    loading: false,
    error: null
}

export default function beersReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_BEERS_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.FETCH_BEERS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                beers: action.payload.beers
            }
        case types.FETCH_BEERS_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                beers: []
            }
        default:
            return state;
    }
}
