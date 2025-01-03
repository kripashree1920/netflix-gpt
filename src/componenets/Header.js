import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const handleSignOut =()=>{
    signOut(auth).then(() => { })
    .catch((error) => {
     navigate("/error")
    });
  }
  useEffect(() => {
    const unsubscribe = 
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in/up, 
          const {uid , email , displayName} = user;
          dispatch(addUser({uid: uid , email:email , displayName:displayName}));
          navigate("/browse")
      
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });

      return ()=> unsubscribe;
 
}, [])

  return (
    <div className='absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <div>
     <img className="w-36"src={LOGO} alt="Logo" />
     </div>
    {user && <div className='flex '>
     <img className='w-10 h-10 rounded-md' src={USER_AVATAR} alt="usericon" />
        <button className='ml-4 font-bold text-white text-lg  border-red-700 border-b-2' onClick={handleSignOut}  > Sign Out</button>
    </div>}
    </div>
  
  )
}

export default Header