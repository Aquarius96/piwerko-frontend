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

export function fetchBeerCommentsFailure(error) {
    return {
        type: types.FETCH_BEER_COMMENTS_FAILURE,
        payload: {error}
    }
}

export function fetchBeerComments() {
    return function action(dispatch) {
        dispatch(fetchBeerCommentsBegin());
        return axios.get('http://localhost:8080/api/comment/get')
            .then(response => {
                dispatch(fetchBeerCommentsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchBeerCommentsFailure(error.response.data));
            });
    }
}

export function addBeerCommentBegin() {
    return {
        type: types.ADD_BEER_COMMENTS_BEGIN
    }
}

export function addBeerCommentSuccess(beer, file) {
    return {
        type: types.ADD_BEER_COMMENTS_SUCCESS,
        payload: {beer, file}
    }
}

export function addBeerCommentFailure(error) {
    return {
        type: types.ADD_BEER_COMMENTS_FAILURE,
        payload: {error}
    }
}

export function addBeerComment(beer, file) {
    return function action(dispatch) {
        dispatch(addBeerBegin());
        return axios.post('http://localhost:8080/api/comment/add', beer, file)
        .then(response => dispatch(addBeerSuccess(response.data)))
        .catch(error => {
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
            dispatch(addBeerFailure(error.message));
        })
    }
}

export function deleteBeerCommentBegin() {
    return {
        type: types.DELETE_BEER_COMMENTS_BEGIN
    }
}

export function deleteBeerCommentSuccess(id) {
    return {
        type: types.DELETE_BEER_COMMENTS_SUCCESS,
        payload: {id}
    }
}

export function deleteBeerCommentFailure(error) {
    return {
        type: types.DELETE_BEER_COMMENTS_FAILURE,
        payload: {error}
    }
}

export function deleteBeerComment(beer) {
    return function action(dispatch) {
        dispatch(deleteBeerBegin());
        return axios.post('http://localhost:8080/api/comment/delete', beer)
        .then(() => dispatch(deleteBeerSuccess(beer.id)))
        .catch(error => {
            dispatch(deleteBeerFailure(error.message));
        })
    }
}

export function updateBeerCommentBegin() {
    return {
        type: types.UPDATE_BEER_COMMENTS_BEGIN
    }
}

export function updateBeerCommentSuccess(beer) {
    return {
        type: types.UPDATE_BEER_COMMENTS_SUCCESS,
        payload: {beer}
    }
}

export function updateBeerCommentFailure(error) {
    return {
        type: types.UPDATE_BEER_COMMENTS_FAILURE,
        payload: {error}
    }
}

export function updateBeerComment(beer) {
    return function action(dispatch) {
        dispatch(updateBeerBegin());
        return axios.put('http://localhost:8080/api/comment/update', beer)
        .then(() => dispatch(updateBeerSuccess(beer)))
        .catch(error => {
            dispatch(updateBeerFailure(error.message));
        })
    }
}