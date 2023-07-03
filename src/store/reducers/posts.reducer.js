import {
    FETCH_POSTS,
    FETCH_SINGLE_POST
} from '../constants/constants';
import {
    postsInitStore,
    singlePostInitStore
} from '../store';

export const postsReducer = (state = postsInitStore, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    };
};

export const singlePostReducer = (state = singlePostInitStore, action) => {
    switch (action.type) {
        case FETCH_SINGLE_POST:
            return {
                ...state,
                singlePost: action.payload
            };
        default:
            return state;
    };
};