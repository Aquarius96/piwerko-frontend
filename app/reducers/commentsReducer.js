import * as types from '../types/index';

const initialState = {
    comments: [],
    loading: false,
    error: null,    
}

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_BEER_COMMENTS_BEGIN:
        case types.ADD_BEER_COMMENT_BEGIN:
        case types.DELETE_BEER_COMMENT_BEGIN:
        case types.UPDATE_BEER_COMMENT_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.FETCH_BEER_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload.comments
            }
        case types.ADD_BEER_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.payload.comment]                
            }
        case types.DELETE_BEER_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: state.comments.filter(comment => comment.id !== action.payload.id)                
            }
        case types.UPDATE_BEER_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: state.comments.map(comment => {
                    return comment.id !== action.payload.comment.id ? comment : action.payload.comment;
                }),                
            }
        case types.FETCH_BEER_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                comments: []               
            }
        case types.ADD_BEER_COMMENT_FAILURE:
        case types.DELETE_BEER_COMMENT_FAILURE:
        case types.UPDATE_BEER_COMMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
