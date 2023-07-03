import axios from 'axios';

import {
    FETCH_USERS,
    FETCH_SINGLE_USER
} from '../constants/constants';

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch({
                    type: FETCH_USERS,
                    payload: response.data
                });
            }
        );
    };
};

export const fetchSingleUser = (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            dispatch({
                type: FETCH_SINGLE_USER,
                payload: response.data
            });
        });
    };
};