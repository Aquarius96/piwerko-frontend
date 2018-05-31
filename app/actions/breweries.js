import * as types from '../types/index';
import axios from 'axios';

export function fetchBreweriesBegin() {
    return {
        type: types.FETCH_BREWERIES_DATA_BEGIN
    }
}

export function fetchBreweriesSuccess(breweries) {
    return {
        type: types.FETCH_BREWERIES_DATA_SUCCESS,
        payload: {breweries}
    }
}

export function fetchBreweriesFailure(error) {
    return {
        type: types.FETCH_BREWERIES_DATA_FAILURE,
        payload: {error}
    }
}

export function fetchBreweries() {
    return function action(dispatch) {
        dispatch(fetchBreweriesBegin());
        return axios.get('http://localhost:8080/api/brewery/get/unconfirmed')
            .then(response => {
                dispatch(fetchBreweriesSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchBreweriesFailure(error.response.data));
            });
    }
}

export function fetchSingleBrewery(id) {
    return {
        type: types.FETCH_SINGLE_BREWERY,
        payload: {id}
    }
}

export function addBreweryBegin() {
    return {
        type: types.ADD_BREWERY_BEGIN
    }
}

export function addBrewerySuccess(brewery, file) {
    return {
        type: types.ADD_BREWERY_SUCCESS,
        payload: {brewery, file}
    }
}

export function addBreweryFailure(error) {
    return {
        type: types.ADD_BREWERY_FAILURE,
        payload: {error}
    }
}

export function addBrewery(brewery, file, photoAdded) {
    return function action(dispatch) {
        dispatch(addBreweryBegin());
        return axios.post('http://localhost:8080/api/brewery/add', brewery, {headers: {'Content-Type': 'application/json', 'username': 'Admin'}})
        .then(res => {
            if(photoAdded) {
                console.log('dodane');
                axios.post('http://localhost:8080/api/brewery/addphoto/' + res.data.id, file, {headers: {'Content-Type': 'application/json', 'username': 'Admin'}})
                .then(response => {                    
                    dispatch(addBrewerySuccess(response.data));
                }
                )
                .catch(error => console.log(error.response.data))
            } else {
                dispatch(addBrewerySuccess(res.data));
            }                      
        })        
        .catch(error => {
            dispatch(addBreweryFailure(error.response.data));
        })
    }
}

export function deleteBreweryBegin() {
    return {
        type: types.DELETE_BREWERY_BEGIN
    }
}

export function deleteBrewerySuccess(id) {
    return {
        type: types.DELETE_BREWERY_SUCCESS,
        payload: {id}
    }
}

export function deleteBreweryFailure(error) {
    return {
        type: types.DELETE_BREWERY_FAILURE,
        payload: {error}
    }
}

export function deleteBrewery(brewery) {
    return function action(dispatch) {
        dispatch(deleteBreweryBegin());
        return axios.post('http://localhost:8080/api/brewery/delete', brewery)
        .then(() => dispatch(deleteBrewerySuccess(brewery.id)))
        .catch(error => {
            dispatch(deleteBreweryFailure(error.response.data));
        })
    }
}

export function updateBreweryBegin() {
    return {
        type: types.UPDATE_BREWERY_BEGIN
    }
}

export function updateBrewerySuccess(brewery) {
    return {
        type: types.UPDATE_BREWERY_SUCCESS,
        payload: {brewery}
    }
}

export function updateBreweryFailure(error) {
    return {
        type: types.UPDATE_BREWERY_FAILURE,
        payload: {error}
    }
}

export function updateBrewery(brewery) {
    return function action(dispatch) {
        dispatch(updateBreweryBegin());
        return axios.put('http://localhost:8080/api/brewery/update', brewery)
        .then(() => dispatch(updateBrewerySuccess(brewery)))
        .catch(error => {
            dispatch(updateBreweryFailure(error.response.data));
        })
    }
}

export function filterBreweries(text) {
    return {
        type: types.FILTER_BREWERIES,
        payload: {text}
    }
}

export function sortBreweriesByName(sortType) {
    return {
        type: types.SORT_BREWERIES_BY_NAME,
        payload: {sortType}
    }
}

