import * as types from '../types/index';
import axios from 'axios';

export function fetchBeerCommentsBegin() {
    return {
        type: types.FETCH_BEER_COMMENTS_BEGIN
    }
}

export function fetchBeerCommentsSuccess(comments) {
    return {
        type: types.FETCH_BEER_COMMENTS_SUCCESS,
        payload: {comments}
    }
}

export function fetchBeerCommentsFailure(error) {
    return {
        type: types.FETCH_BEER_COMMENTS_FAILURE,
        payload: {error}
    }
}

export function fetchBeerComments(beerId) {
    return function action(dispatch) {
        dispatch(fetchBeerCommentsBegin());
        return axios.get('http://localhost:8080/api/comment/get/' + beerId)
            .then(response => {
                console.log('commentss');
                console.log(response.data);
                const arr = [];
                for(let i = 0; i < response.data.length; i++) {
                    arr.push(response.data[i].comment);
                    arr[i].rate = response.data[i].rate;
                    arr[i].avatar_URL = response.data[i].avatar_URL;
                    arr[i].username = response.data[i].username;
                }
                console.log(arr);
                dispatch(fetchBeerCommentsSuccess(arr));
            })
            .catch(error => {
                console.log('err' + error);
                console.log('resp' + error.response.data);
                console.log('req' + error.request);
                dispatch(fetchBeerCommentsFailure(error.response.data));
            });
    }
}

export function addBeerCommentBegin() {
    return {
        type: types.ADD_BEER_COMMENT_BEGIN
    }
}

export function addBeerCommentSuccess(comment) {
    return {
        type: types.ADD_BEER_COMMENT_SUCCESS,
        payload: {comment}
    }
}

export function addBeerCommentFailure(error) {
    return {
        type: types.ADD_BEER_COMMENT_FAILURE,
        payload: {error}
    }
}

export function addBeerComment(data) {
    return function action(dispatch) {
        dispatch(addBeerCommentBegin());
        return axios.post('http://localhost:8080/api/comment/add', data)
        .then(response => dispatch(addBeerCommentSuccess(response.data)))
        .catch(error => {
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
            dispatch(addBeerCommentFailure(error.response.data));
        })
    }
}

export function deleteBeerCommentBegin() {
    return {
        type: types.DELETE_BEER_COMMENT_BEGIN
    }
}

export function deleteBeerCommentSuccess(id) {
    return {
        type: types.DELETE_BEER_COMMENT_SUCCESS,
        payload: {id}
    }
}

export function deleteBeerCommentFailure(error) {
    return {
        type: types.DELETE_BEER_COMMENT_FAILURE,
        payload: {error}
    }
}

export function deleteBeerComment(comment) {
    return function action(dispatch) {
        dispatch(deleteBeerCommentBegin());
        return axios.post('http://localhost:8080/api/comment/delete', comment)
        .then(() => dispatch(deleteBeerCommentSuccess(comment.id)))
        .catch(error => {
            dispatch(deleteBeerCommentFailure(error.response.data));
        })
    }
}

export function updateBeerCommentBegin() {
    return {
        type: types.UPDATE_BEER_COMMENT_BEGIN
    }
}

export function updateBeerCommentSuccess(comment) {
    return {
        type: types.UPDATE_BEER_COMMENT_SUCCESS,
        payload: {comment}
    }
}

export function updateBeerCommentFailure(error) {
    return {
        type: types.UPDATE_BEER_COMMENT_FAILURE,
        payload: {error}
    }
}

export function updateBeerComment(comment) {
    return function action(dispatch) {
        dispatch(updateBeerCommentBegin());
        return axios.put('http://localhost:8080/api/comment/update', comment)
        .then(() => dispatch(updateBeerCommentSuccess(comment)))
        .catch(error => {
            dispatch(updateBeerCommentFailure(error.response.data));
        })
    }
}

