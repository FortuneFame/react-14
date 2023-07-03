import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card, ListItemButton, ListItemText } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

import { fetchComments } from '../../../store/actions/comments.action';

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.commentsReducer.comments);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    if (!comments) {
        return <div>Loading...</div>;
    };

    const handleCommentClick = (id) => {
        navigate(`/comments/${id}`);
    };

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {comments.map((comment) => (
                <Card key={comment.id} className="card m-3 p-3" style={{ width: '25%' }}>
                    <ListItemButton onClick={() => handleCommentClick(comment.id)} className="text-center list-group-item">
                        <ListItemText primary={comment.name.charAt(0).toUpperCase() + comment.name.slice(1)} />
                    </ListItemButton>
                </Card>
            ))}
        </div>
    );
};

export default Comments;
