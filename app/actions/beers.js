import * as types from '../types/index';
import axios from 'axios';

export function fetchBeersBegin() {
    return {
        type: types.FETCH_BEERS_DATA_BEGIN
    }
}

export function fetchBeersSuccess(beers) {
    return {
        type: types.FETCH_BEERS_DATA_SUCCESS,
        payload: {beers}
    }
}

export function fetchBeersFailure(error) {
    return {
        type: types.FETCH_BEERS_DATA_FAILURE,
        payload: {error}
    }
}

export function fetchBeers() {
    return function action(dispatch) {
        dispatch(fetchBeersBegin());
        return axios.get('http://localhost:8080/api/beer/get/unconfirmed')
            .then(response => {
                dispatch(fetchBeersSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchBeersFailure(error.message));
            });
    }
}

export function fetchSingleBeer(id) {
    return {
        type: types.FETCH_SINGLE_BEER,
        payload: {id}
    }
}

export function addBeerBegin() {
    return {
        type: types.ADD_BEER_BEGIN
    }
}

export function addBeerSuccess(beer, file) {
    return {
        type: types.ADD_BEER_SUCCESS,
        payload: {beer, file}
    }
}

export function addBeerFailure(error) {
    return {
        type: types.ADD_BEER_FAILURE,
        payload: {error}
    }
}

export function addBeer(beer, file) {
    return function action(dispatch) {
        dispatch(addBeerBegin());
        return axios.post('http://localhost:8080/api/beer/add', beer, file)
        .then(response => dispatch(addBeerSuccess(response.data)))
        .catch(error => {
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
            dispatch(addBeerFailure(error.message));
        })
    }
}

export function deleteBeerBegin() {
    return {
        type: types.DELETE_BEER_BEGIN
    }
}

export function deleteBeerSuccess(id) {
    return {
        type: types.DELETE_BEER_SUCCESS,
        payload: {id}
    }
}

export function deleteBeerFailure(error) {
    return {
        type: types.DELETE_BEER_FAILURE,
        payload: {error}
    }
}

export function deleteBeer(beer) {
    return function action(dispatch) {
        dispatch(deleteBeerBegin());
        return axios.post('http://localhost:8080/api/beer/delete', beer)
        .then(() => dispatch(deleteBeerSuccess(beer.id)))
        .catch(error => {
            dispatch(deleteBeerFailure(error.message));
        })
    }
}

export function updateBeerBegin() {
    return {
        type: types.UPDATE_BEER_BEGIN
    }
}

export function updateBeerSuccess(beer) {
    return {
        type: types.UPDATE_BEER_SUCCESS,
        payload: {beer}
    }
}

export function updateBeerFailure(error) {
    return {
        type: types.UPDATE_BEER_FAILURE,
        payload: {error}
    }
}

export function updateBeer(beer) {
    return function action(dispatch) {
        dispatch(updateBeerBegin());
        return axios.put('http://localhost:8080/api/beer/update', beer)
        .then(() => dispatch(updateBeerSuccess(beer)))
        .catch(error => {
            dispatch(updateBeerFailure(error.message));
        })
    }
}

export function filterBeers(text) {
    return {
        type: types.FILTER_BEERS,
        payload: {text}
    }
}

export function sortBeersByName(sortType) {
    return {
        type: types.SORT_BEERS_BY_NAME,
        payload: {sortType}
    }
}


