import {
    FETCH_COMMENTS,
    FETCH_SINGLE_COMMENT
} from '../constants/constants';
import {
    commentsItitStore,
    singleCommentItitStore
} from '../store';

export const commentsReducer = (state = commentsItitStore, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    };
};

export const singleCommentsReducer = (state = singleCommentItitStore, action) => {
    switch (action.type) {
        case FETCH_SINGLE_COMMENT:
            return {
                ...state,
                singleComment: action.payload
            };
        default:
            return state;
    };
};