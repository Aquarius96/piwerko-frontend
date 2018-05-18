import * as types from '../types/index';

const initialState = {
    beers: [],
    loading: false,
    error: null,
    filterText: '',
    filteredBeers: [],
    sortType: ''
}

export default function beersReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_BEERS_DATA_BEGIN:
        case types.ADD_BEER_BEGIN:
        case types.DELETE_BEER_BEGIN:
        case types.UPDATE_BEER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.FETCH_BEERS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                beers: action.payload.beers,
                filteredBeers: action.payload.beers
            }
        case types.ADD_BEER_SUCCESS:
            return {
                ...state,
                loading: false,
                beers: [...state.beers, action.payload.beer],
                filteredBeers: [...state.beers, action.payload.beer]
            }
        case types.DELETE_BEER_SUCCESS:
            return {
                ...state,
                loading: false,
                beers: state.beers.filter(beer => beer.id !== action.payload.id),
                filteredBeers: state.beers.filter(beer => beer.id !== action.payload.id)
            }
        case types.UPDATE_BEER_SUCCESS:
            return {
                ...state,
                loading: false,
                beers: state.beers.map(beer => {
                    return beer.id !== action.payload.beer.id ? beer : action.payload.beer;
                }),
                filteredBeers: state.beers.map(beer => {
                    return beer.id !== action.payload.beer.id ? beer : action.payload.beer;
                })
            }
        case types.FETCH_BEERS_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                beers: [],
                filteredBeers: []
            }
        case types.ADD_BEER_FAILURE:
        case types.DELETE_BEER_FAILURE:
        case types.UPDATE_BEER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case types.FILTER_BEERS:
            return {
                ...state,
                filterText: action.payload.text,
                filteredBeers: state.beers.filter((beer) => beer.name.indexOf(action.payload.text) !== -1)
            }
        case types.SORT_BEERS_BY_NAME:
            return {
                ...state,
                sortType: action.payload.sortType 
            }
        default:
            return state;
    }
}
