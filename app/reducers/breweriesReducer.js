import * as types from '../types/index';

const initialState = {
    breweries: [],
    singleBrewery: {},
    singleBreweryBeers: [],
    loading: false,
    error: null,
    filterText: '',
    filteredBreweries: [],
    sortType: '',
}

export default function breweriesReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_BREWERIES_DATA_BEGIN:
        case types.ADD_BREWERY_BEGIN:
        case types.DELETE_BREWERY_BEGIN:
        case types.UPDATE_BREWERY_BEGIN:
        case types.FETCH_SINGLE_BREWERY_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.FETCH_BREWERIES_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                breweries: action.payload.breweries,
                filteredBreweries: action.payload.breweries
            }
        case types.FETCH_SINGLE_BREWERY_SUCCESS:
            return {
                ...state,
                loading: false,
                singleBrewery: action.payload.brewery
            }
        case types.ADD_BREWERY_SUCCESS:
            return {
                ...state,
                loading: false,
                breweries: [...state.breweries, action.payload.brewery],
                filteredBreweries: [...state.breweries, action.payload.brewery]
            }
        case types.DELETE_BREWERY_SUCCESS:
            return {
                ...state,
                loading: false,
                breweries: state.breweries.filter(brewery => brewery.id !== action.payload.id),
                filteredBreweries: state.breweries.filter(brewery => brewery.id !== action.payload.id)
            }
        case types.UPDATE_BREWERY_SUCCESS:
            return {
                ...state,
                loading: false,
                breweries: state.breweries.map(brewery => {
                    return brewery.id !== action.payload.brewery.id ? brewery : action.payload.brewery;
                }),
                filteredBreweries: state.breweries.map(brewery => {
                    return brewery.id !== action.payload.brewery.id ? brewery : action.payload.brewery;
                })
            }
        case types.FETCH_BREWERIES_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                breweries: [],
                filteredBreweries: []
            }
        case types.FETCH_SINGLE_BREWERY_FAILURE:
        case types.ADD_BREWERY_FAILURE:
        case types.DELETE_BREWERY_FAILURE:
        case types.UPDATE_BREWERY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case types.FILTER_BREWERIES:
            return {
                ...state,
                filterText: action.payload.text,
                filteredBreweries: state.breweries.filter((brewery) => brewery.name.indexOf(action.payload.text) !== -1)
            }
        case types.SORT_BREWERIES_BY_NAME:
            return {
                ...state,
                sortType: action.payload.sortType 
            }        
        default:
            return state;
    }
}
