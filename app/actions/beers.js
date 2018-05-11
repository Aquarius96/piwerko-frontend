import * as types from '../types/beers';
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
