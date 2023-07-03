import { combineReducers } from 'redux';

import { usersReducer, singleUserReducer } from './users.reducer';
import { postsReducer, singlePostReducer } from './posts.reducer';
import { commentsReducer, singleCommentsReducer } from './comments.reducer';
import { counterReducer } from './counter.reducer';

export default combineReducers({
    usersReducer,
    singleUserReducer,
    postsReducer,
    singlePostReducer,
    commentsReducer,
    singleCommentsReducer,
    counterReducer
});