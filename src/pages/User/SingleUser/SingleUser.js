import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Avatar, Typography } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

import { fetchSingleUser } from '../../../store/actions/users.action';

const SingleUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.singleUserReducer.singleUser);

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleUser(id));
        }
    }, [dispatch, id]);

    if (!user) {
        return <div>Loading...</div>;
    };

    return (
        <div className="userWrapper p-4">
            <h2 className="text-center p-2">User Details</h2>
            <div className="text-center mb-3 p-3">
                <Avatar alt={`User ${user.id}`} className="mr-3 mb-3" style={{ width: "150px", height: "150px", margin: "0 auto" }}>
                    <img
                        width='150px'
                        height='150px'
                        alt="avatar-user"
                        src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(user.id) % 100}.jpg`}
                        onError={(e) => {
                            e.target.onerror = null;
                        }}
                    />
                </Avatar>
                <div className="userInfor">
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Name:</strong> {user.name}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Login:</strong> {user.username}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Email:</strong> {user.email}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Phone:</strong> {user.phone}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Web:</strong> {user.website}
                    </Typography>
                    {user.address && (
                        <Typography variant="subtitle1" className="mb-2">
                            <strong>Address:</strong> city: {user.address.city}, street: {user.address.street}, {user.address.suite}
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleUser;
