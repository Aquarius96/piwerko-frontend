import * as types from './types';


export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function fetchBeers() {
    const data = [];
    return {
        type: types.FETCH_BEERS_DATA,
        data
    };
}
