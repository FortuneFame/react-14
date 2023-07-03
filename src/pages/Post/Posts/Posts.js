import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card, ListItemButton, ListItemText } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

import { fetchPosts } from '../../../store/actions/posts.action';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsReducer.posts);
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (!posts) {
        return <div>Loading...</div>;
    };

    const handlePostClick = (id) => {
        navigate(`/posts/${id}`);
    };

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {posts.map((post) => (
                <Card key={post.id} className="card m-4 p-3" style={{ width: '25%' }}>
                    <ListItemButton onClick={() => handlePostClick(post.id)} className="text-center list-group-item">
                        <ListItemText primary={post.title.charAt(0).toUpperCase() + post.title.slice(1)} />
                    </ListItemButton>
                </Card>
            ))}
        </div>
    );
};

export default Posts;