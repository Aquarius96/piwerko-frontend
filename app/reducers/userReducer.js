import * as types from '../types/index';

const initialState = {
    logged: false,
    loading: false,
    error: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_BEGIN:
        case types.REGISTER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                logged: true
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.LOGIN_FAILURE:
        case types.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
