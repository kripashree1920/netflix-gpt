import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckFormValidation } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const ToggleSignIn = () => {
    setIsSignIn(!isSignIn);
    if (!isSignIn) {
      errorMessage === "Name is invalid"
        ? setErrorMessage(null)
        : setErrorMessage(errorMessage);
    }
  };

  const name = useRef(null);
  const email_Phone = useRef(null);
  const password = useRef(null);

  const handleSubmitBtn = () => {
    const message = CheckFormValidation(
      name?.current?.value,
      email_Phone?.current?.value,
      password?.current?.value,
      isSignIn
    );
    setErrorMessage(message);
    if(message) return;
    if (!isSignIn) {

      createUserWithEmailAndPassword(auth, email_Phone?.current?.value,
        password?.current?.value,)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(name?.current?.value);
          updateProfile(user, {
            displayName: name?.current?.value
          }).then(() => {
            // Profile updated!
          const {uid , email , displayName} = auth.currentUser;
          dispatch(addUser({uid: uid , email:email , displayName:displayName}))
          navigate("/browse")
           
          }).catch((error) => {
            setErrorMessage(error)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
          // ..
        });
    } else {

      signInWithEmailAndPassword(auth, email_Phone?.current?.value,
        password?.current?.value,)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage)
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full object-cover">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_medium.jpg"
          alt="Background img"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 px-20 py-12  my-44 mx-auto  bg-black bg-opacity-70 left-0 right-0 text-white rounded font-bold"
      >
        <h1 className=" text-4xl my-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="w-full bg-gray-500 bg-opacity-25 p-4 my-4  border-gray-400 rounded border text-lg"
          />
        )}
        <input
          ref={email_Phone}
          type="text"
          placeholder="Email or mobile number"
          className="w-full bg-gray-500 bg-opacity-25 p-4 my-4  border-gray-400 rounded border text-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-gray-800  bg-opacity-25 p-4 my-4  border-gray-400 rounded border text-lg w-full"
        />
        <p className="text-red-500 font-bold ">{errorMessage}</p>
        <button
          className="bg-red-600 p-4 my-6 w-full rounded-lg text-lg"
          onClick={handleSubmitBtn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 cursor-default">
          {isSignIn ? "New to Netflix ?" : "Already registered!"}
          <span
            className="my-10 text-lg cursor-pointer text-white"
            onClick={ToggleSignIn}
          >
            {isSignIn ? " Sign up now." : " Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
