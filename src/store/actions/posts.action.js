import axios from 'axios';

import {
    FETCH_POSTS,
    FETCH_SINGLE_POST
} from '../constants/constants';

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            dispatch({
                type: FETCH_POSTS,
                payload: response.data
            });
        });
    };
};

export const fetchSinglePost = (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            dispatch({
                type: FETCH_SINGLE_POST,
                payload: response.data
            });
        });
    };
};