import * as types from '../types/index';
import axios from 'axios';

export function loginBegin() {
    return {
        type: types.LOGIN_BEGIN
    }
}

export function loginSuccess(user) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: {user}
    }
}

export function loginFailure(error) {
    return {
        type: types.LOGIN_FAILURE,
        payload: {error}
    }
}

export function login(user) {
    return function action(dispatch) {
        dispatch(loginBegin());
        return axios.post('http://localhost:8080/api/user/signin', user)
        .then(response => {
            localStorage.setItem('token', response.data);
            dispatch(loginSuccess(response.data));            
        })
        .catch(error => {
            dispatch(loginFailure(error.message));
        })
    }
}

export function registerBegin() {
    return {
        type: types.REGISTER_BEGIN
    }
}

export function registerSuccess(user) {
    return {
        type: types.REGISTER_SUCCESS,
        payload: {user}
    }
}

export function registerFailure(error) {
    return {
        type: types.REGISTER_FAILURE,
        payload: {error}
    }
}

export function register(user) {
    return function action(dispatch) {
        console.log('rejestruje');
        dispatch(registerBegin());
        return axios.post('http://localhost:8080/api/user/register', user)
        .then(response => dispatch(registerSuccess(response.data)))
        .catch(error => {
            dispatch(registerFailure(error.message));
        })
    }
}
