import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";

import { fetchSingleComment } from '../../../store/actions/comments.action';

const SingleComment = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const comment = useSelector(state => state.singleCommentsReducer.singleComment);

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleComment(id));
        }
    }, [dispatch, id]);

    if (!comment) {
        return <div>Loading...</div>;
    };

    return (
        <div className="commentWrapper p-5">
            <div className="text-center d-flex justify-content-center flex-column mb-4">
                <h2 className="text-center mb-4 p-3">Comment Details</h2>
                {comment.name && <Typography variant="subtitle1" className="mb-3">
                    <strong>Name:</strong> {comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
                </Typography>}
                {comment.email && <Typography variant="body2" className="mb-3">
                    <strong>Email:</strong> {comment.email}
                </Typography>}
                {comment.body && <Typography variant="body1" className="mb-2">
                    <strong>Body:</strong> {comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}
                </Typography>}
            </div>
        </div>
    );
};

export default SingleComment;