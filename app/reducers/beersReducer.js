import * as types from '../types/index';

const initialState = {
    beers: [],
    singleBeer: {},
    singleRate: null,
    loading: false,
    error: null,   
    filterText: '',
    filteredBeers: [],
    favoriteBeers: [],
    sortType: ''
}

export default function beersReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_BEERS_DATA_BEGIN:
        case types.FETCH_FAVORITE_BEERS_DATA_BEGIN:
        case types.ADD_BEER_BEGIN:
        case types.DELETE_BEER_BEGIN:
        case types.UPDATE_BEER_BEGIN:
        case types.ADD_RATE_BEGIN:
        case types.FETCH_SINGLE_RATE_BEGIN:
        case types.FETCH_SINGLE_BEER_BEGIN:
        case types.ADD_FAVORITE_BEER_BEGIN:
        case types.DELETE_FAVORITE_BEER_BEGIN:        
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
        case types.FETCH_FAVORITE_BEERS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                favoriteBeers: action.payload.beers
            }
        case types.FETCH_SINGLE_RATE_SUCCESS:
            return {
                ...state,
                loading: false,
                singleRate: action.payload.rate
            }
        case types.FETCH_SINGLE_BEER_SUCCESS:
            return {
                ...state,
                loading: false,
                singleBeer: action.payload.beer
            }
        case types.ADD_FAVORITE_BEER_SUCCESS:
            return {
                ...state,
                loading: false,
                favoriteBeers: [...state.favoriteBeers, action.payload.beer]
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
        case types.DELETE_FAVORITE_BEER_SUCCESS:
            return {
                ...state,
                loading: false,
                favoriteBeers: state.favoriteBeers.filter(beer => beer.beerId !== action.payload.beerIid && beer.userId !== action.payload.userId),                
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
        case types.ADD_RATE_SUCCESS:
            return {
                ...state,
                loading: false,
                singleBeer: {
                    ...state.singleBeer,
                    rate: action.payload.data
                },
                beers: state.beers.map(beer => {
                    return beer.id !== state.singleBeer.id ? beer : {...beer, rate: action.payload.data}
                }),
                singleRate: action.payload.rateValue                                 
            }        
        case types.FETCH_BEERS_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                beers: [],
                filteredBeers: []
            }
        case types.FETCH_FAVORITE_BEERS_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                favoriteBeers: []
            }
        case types.ADD_BEER_FAILURE:
        case types.DELETE_BEER_FAILURE:
        case types.UPDATE_BEER_FAILURE:
        case types.FETCH_SINGLE_RATE_FAILURE:
        case types.FETCH_SINGLE_BEER_FAILURE:
        case types.ADD_RATE_FAILURE:
        case types.ADD_FAVORITE_BEER_FAILURE:
        case types.DELETE_FAVORITE_BEER_FAILURE:
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
