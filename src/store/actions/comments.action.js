import axios from 'axios';

import {
    FETCH_COMMENTS,
    FETCH_SINGLE_COMMENT
} from '../constants/constants';

export const fetchComments = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            dispatch({
                type: FETCH_COMMENTS,
                payload: response.data
            });
        });
    };
};

export const fetchSingleComment = (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(response => {
            dispatch({
                type: FETCH_SINGLE_COMMENT,
                payload: response.data
            });
        });
    };
};