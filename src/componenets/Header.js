import React from 'react';
import { signOut } from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const handleSignOut =()=>{
    signOut(auth).then(() => {
     navigate('/')
    }).catch((error) => {
     navigate("/error")
    });
  }
  return (
    <div className='absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <div>
     <img className="w-36"src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
     </div>
    {user && <div className='flex '>
     <img className='w-10 h-10 rounded-md' src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="usericon" />
        <button className='ml-4 font-bold text-white text-lg  border-red-700 border-b-2' onClick={handleSignOut}  > Sign Out</button>
    </div>}
    </div>
  
  )
}

export default Header