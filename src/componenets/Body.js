import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser';

const Body = () => {
    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browser />
        }
    ]);

    return (
        <RouterProvider router={appRoute} />
    );
}

export default Body;
