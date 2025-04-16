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
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

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

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-6 ">
          <button onClick={handleGptSearchClick}>
            <img
              className="h-11 border-2 border-white rounded-full mr-4"
              src={GPT_ICON}
              alt="gpt-icon"
            />
          </button>
          <img
            className="w-12 h-12 mr-4 rounded-xl border-2 border-white"
            alt="user_icon"
            src={user?.photoURL}
          />
          <button
            className="font-bold text-black border-2 border-solid rounded-md bg-white text-black m-2 p-1 hover:bg-gray-600 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-black"
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
