import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import Home from './pages/Home'
import Users from './pages/User/Users';
import SingleUser from './pages/User/SingleUser';
import Posts from './pages/Post/Posts';
import SinglePost from './pages/Post/SinglePost';
import Comments from './pages/Comment/Comments';
import SingleComment from './pages/Comment/SingleComment';
import Сounter from './pages/Counter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <SingleUser />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/posts/:id',
        element: <SinglePost />,
      },
      {
        path: '/comments',
        element: <Comments />,
      },
      {
        path: '/comments/:id',
        element: <SingleComment />,
      },
      {
        path: '/counter',
        element: <Сounter />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
