import * as types from '../types/index';
import axios from 'axios';

export function fetchBeerCommentsBegin(beerId) {
    return {
        type: types.FETCH_BEER_COMMENTS_BEGIN
    }
}

export function fetchBeerCommentsSuccess(beerComments) {
    return {
        type: types.FETCH_BEER_COMMENTS_SUCCESS,
        payload: {beerComments}
    }
}

export function fetchBreweriesFailure(error) {
    return {
        type: types.FETCH_BEER_COMMENTS_FAILURE,
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