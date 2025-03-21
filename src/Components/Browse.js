import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

const Browse = () => {

  // Calling custom Hook
  useNowPlayingMovies()
  return <Header />;
};

export default Browse;
