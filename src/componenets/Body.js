import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
    const dispatch = useDispatch()
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

useEffect(() => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in/up, 
          const {uid , email , displayName} = user;
          dispatch(addUser({uid: uid , email:email , displayName:displayName}))
      
        } else {
          // User is signed out
          dispatch(removeUser())
        }
      });
 
}, [])




    return (
        <RouterProvider router={appRoute} />
    );
}

export default Body;
