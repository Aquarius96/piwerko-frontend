import * as types from '../types/index';

const initialState = {
    breweries: [],
    loading: false,
    error: null
}

export default function breweriesReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_BREWERIES_DATA_BEGIN:
        case types.ADD_BREWERY_BEGIN:
        case types.DELETE_BREWERY_BEGIN:
        case types.UPDATE_BREWERY_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.FETCH_BREWERIES_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                breweries: action.payload.breweries
            }
        case types.ADD_BREWERY_SUCCESS:
            return {
                ...state,
                loading: false,
                breweries: [...state.breweries, action.payload.brewery]
            }
        case types.DELETE_BREWERY_SUCCESS:
            return {
                ...state,
                loading: false,
                breweries: state.breweries.filter(brewery => brewery.id !== action.payload.id)
            }
        case types.UPDATE_BREWERY_SUCCESS:
            return {
                ...state,
                loading: false,
                breweries: state.breweries.map(brewery => {
                    return brewery.id !== action.payload.brewery.id ? brewery : action.payload.brewery;
                })
            }
        case types.FETCH_BREWERIES_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                breweries: []
            }
        case types.ADD_BREWERY_FAILURE:
        case types.DELETE_BREWERY_FAILURE:
        case types.UPDATE_BREWERY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
