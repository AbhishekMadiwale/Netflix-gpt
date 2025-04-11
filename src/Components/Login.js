import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { User_Avatar } from "../utils/constants";

const Login = () => {
  // State variable to change the state of form
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  // Function to change the sign up and sign in form
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // reference variables to use in useRef hook
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  // Function to handle the signin / signup button
  const toggleSignIn = () => {
    // Validating the form

    const message = checkValidData(
      email.current.value,
      password.current.value,
      userName.current ? userName.current.value : ""
    );
    setErrorMessage(message);

    if (message) return;

    // Sign / Sign Up handling
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: User_Avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Enter full name"
            className="p-4 my-2 w-full bg-gray-700 border-2 border-white rounded-lg bg-opacity-50"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-700 border-2 border-white rounded-lg bg-opacity-50"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-4 my-2 w-full bg-gray-700 border-2 border-white rounded-lg bg-opacity-50"
        />
        <p className="text-red-700 text-lg p-2 font-bold">{errorMessage}</p>
        <button
          type="button"
          className="p-4 my-6 bg-red-700 rounded-lg w-full"
          onClick={toggleSignIn}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>

        <h2 className="text-center opacity-70">OR</h2>

        <button className="p-4 my-6 bg-gray-600 rounded-lg w-full bg-opacity-60">
          Use a Sign code
        </button>

        <h2 className="text-center">
          <Link className="underline">Forget password?</Link>
        </h2>

        <p className="py-5">
          <Link className="underline cursor-pointer" onClick={toggleForm}>
            {isSignInForm
              ? "New to Netflix? Sign up"
              : "Already registered ? Sign in Now"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
