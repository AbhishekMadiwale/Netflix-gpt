import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  // State variable to change the state of form
  const [isSignInForm, setIsSignInForm] = useState(true);

  // Function to change the sign up and sign in form
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
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
      <form className="w-4/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter full name"
            className="p-4 my-2 w-full bg-gray-700 border-2 border-white rounded-lg bg-opacity-50"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-700 border-2 border-white rounded-lg bg-opacity-50"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="p-4 my-2 w-full bg-gray-700 border-2 border-white rounded-lg bg-opacity-50"
        />
        <button className="p-4 my-6 bg-red-700 rounded-lg w-full">
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
