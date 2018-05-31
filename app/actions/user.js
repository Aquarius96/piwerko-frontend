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
            console.log('dziala');
            dispatch(loginSuccess(response.data));            
        })
        .catch(error => {
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
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
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
            dispatch(registerFailure(error.response.data));
        })
    }
}

export function confirmBegin() {
    return {
        type: types.CONFIRM_BEGIN
    }
}

export function confirmSuccess(message) {
    return {
        type: types.CONFIRM_SUCCESS,
        payload: {message}
    }
}

export function confirmFailure(error) {
    return {
        type: types.CONFIRM_FAILURE,
        payload: {error}
    }
}

export function confirm(data) {
    return function action(dispatch) {
        console.log('confirmuje');
        dispatch(confirmBegin());
        return axios.post('http://localhost:8080/api/user/confirm', data)
        .then(response => dispatch(confirmSuccess(response.data)))
        .catch(error => {
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
            dispatch(confirmFailure(error.response.data));
        })
    }
}

export function forgotPasswordBegin() {
    return {
        type: types.FORGOT_PASSWORD_BEGIN
    }
}

export function forgotPasswordSuccess(message) {
    return {
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: {message}
    }
}

export function forgotPasswordFailure(error) {
    return {
        type: types.FORGOT_PASSWORD_FAILURE,
        payload: {error}
    }
}

export function forgotPassword(data) {
    return function action(dispatch) {
        console.log('forgotuje');
        dispatch(forgotPasswordBegin());
        return axios.post('http://localhost:8080/api/user/newpwd', data)
        .then(response => dispatch(forgotPasswordSuccess(response.data.message)))
        .catch(error => {
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
            dispatch(forgotPasswordFailure(error.response.data));
        })
    }
}
