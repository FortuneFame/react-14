import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card, ListItemButton, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

import { fetchUsers } from '../../../store/actions/users.action';

const Users = () => {
   const dispatch = useDispatch();
   const users = useSelector(state => state.usersReducer.users);
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(fetchUsers());
   }, [dispatch]);

   if (!users) {
      return <div>Loading...</div>;
   };

   const handleUserClick = (id) => {
      navigate(`/users/${id}`);
   };

   return (
      <div className="d-flex justify-content-around flex-wrap">
         {users.map(user => (
            <Card key={user.id} className="card m-3 p-3" style={{ width: '25%' }}>
               <ListItemButton onClick={() => handleUserClick(user.id)} className="list-group-item">
                  <ListItemAvatar>
                     <Avatar alt={`User ${user.id}`} className="mr-3">
                        <img
                           alt='avatar-user'
                           src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(user.id) % 100}.jpg`}
                           onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "../default/default-img.png";
                           }}
                        />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={user.name} />
               </ListItemButton>
            </Card>
         ))}
      </div>
   );
};

export default Users;
