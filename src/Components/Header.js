import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  User_Avatar,
  NETFLIX_LOGO,
  GPT_ICON,
  SIGN_OUT_STRING,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    // Firebase provide this API check docs
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;

        // we will dispatch action here and navigating the user to browse page
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: User_Avatar,
          })
        );
        navigate("/browse");
      } else {
        // we will remove the user on sign out and redirect to home
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-6 overflow-hidden">
          {showGptSearch && (
            <select
              className="rounded-lg mr-5 h-10 z-[999] hover:bg-slate-200"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button onClick={handleGptSearchClick} className="group">
            <img
              className="h-11 border-2 border-white rounded-full mr-4 "
              src={GPT_ICON}
              alt="gpt-icon"
            />
            {showGptSearch && (
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                go to home 
              </span>
            )}
            {!showGptSearch && (
              <span className="  bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Go to GPT
              </span>
            )}
          </button>
          <img
            className="w-12 h-12 mr-4 rounded-xl border-2 border-white"
            alt="user_icon"
            src={user?.photoURL}
          />
          <button
            className="font-bold text-black border-2 border-solid rounded-md bg-white text-black mb-6 p-1 hover:bg-gray-600 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-black"
            onClick={handleSignOut}
          >
            {SIGN_OUT_STRING}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
