import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Typography } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

import { fetchSinglePost } from '../../../store/actions/posts.action';

const SinglePost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => state.singlePostReducer.singlePost);

    useEffect(() => {
        if (id) {
            dispatch(fetchSinglePost(id));
        }
    }, [dispatch, id]);

    if (!post) {
        return <div>Loading...</div>;
    };

    return (
        <div className="postWrapper p-5">
            <h2 className="text-center p-3">Post Details</h2>
            <div className="text-center mb-4">
                <Typography variant="h6" className="mb-2">
                    <strong>Title:</strong> {post.title ? post.title.charAt(0).toUpperCase() + post.title.slice(1) : ''}
                </Typography>
                <Typography variant="body1" className="mb-2">
                    <strong>Body:</strong> {post.body ? post.body.charAt(0).toUpperCase() + post.body.slice(1) : ''}
                </Typography>
            </div>
        </div>
    );
};

export default SinglePost;
