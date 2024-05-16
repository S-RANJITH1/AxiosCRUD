import React from 'react';
import Home from '../components/Home';
import DashBoard from '../components/DashBoard';
import Create from '../components/Create';
import Edit  from '../components/Edit';
import { Navigate } from 'react-router-dom';

// Array route objects
const AppRoutes = [
    {
        path: '/',
        exact: true,
        element: <Home />,
    },
    {
        path: '/dashboard',
        exact: true,
        element: <DashBoard />,
    },
    {
        path: '/create',
        exact: true,
        element: <Create />,
    },
    {
        path: '/edit/:id',
        exact: true,
        element: <Edit />, 
    },
    // Wildcard route,redirects to the home page for any unmatched route
    {
        path: '*',
        exact: true,
        element: <Navigate to='/' />,
    },
];

export default AppRoutes;