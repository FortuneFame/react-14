import {
    FETCH_USERS,
    FETCH_SINGLE_USER
} from '../constants/constants';
import {
    usersInitStore,
    singleUserInitStore
} from '../store';

export const usersReducer = (state = usersInitStore, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    };
};

export const singleUserReducer = (state = singleUserInitStore, action) => {
    switch (action.type) {
        case FETCH_SINGLE_USER:
            return {
                ...state,
                singleUser: action.payload
            };
        default:
            return state;
    };
};