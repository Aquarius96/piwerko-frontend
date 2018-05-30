import * as types from '../types/index';

const initialState = {
    loading: false,
    error: null,
    message: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_BEGIN:
        case types.REGISTER_BEGIN:
        case types.CONFIRM_BEGIN:
        case types.FORGOT_PASSWORD_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.CONFIRM_SUCCESS:
        case types.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message
            }
        case types.LOGIN_FAILURE:
        case types.REGISTER_FAILURE:
        case types.CONFIRM_FAILURE:
        case types.FORGOT_PASSWORD_FAILURE:                   
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
