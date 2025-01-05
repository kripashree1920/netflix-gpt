import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE, USER_AVATAR } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { lang } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const languageName = useSelector((store) => store?.config?.lang);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  const showGptSearch = useSelector((store) => store?.gpt?.gptSearch);
  const handleSignOut = () => {

    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
    dispatch(changeLanguage('en'))

  };
  const handleGptSearchToggle = () => {
    dispatch(toggleGptSearchView());
    dispatch(changeLanguage('en'))
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e?.target?.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in/up,
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div>
        <img className="w-36" src={LOGO} alt="Logo" />
      </div>
      {user && (
        <div className="flex items-center ">
          {showGptSearch && (
            <select
              className="m-2 p-2 bg-gray-900 text-white  "
              onChange={handleChangeLanguage}
            >
              {SUPPORTED_LANGUAGE?.map((lang) => (
                <option value={lang?.indentifer} key={lang?.indentifer}>
                  {lang?.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-pink-600 text-white m-2 px-4 rounded-lg py-2 "
            onClick={handleGptSearchToggle}
          >
            <i className="fa-brands fa-searchengin mx-1"></i>{" "}
            {showGptSearch? lang[languageName]?.gptSearch : 'GPT Search'}
          </button>
          <img
            className="w-10 h-10 rounded-md"
            src={USER_AVATAR}
            alt="usericon"
          />
          <button
            className="ml-4 font-bold text-white text-lg  border-red-700 border-b-2"
            onClick={handleSignOut}
          >
            {" "}
            {showGptSearch? lang[languageName]?.signOut: lang['en']?.signOut }
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
