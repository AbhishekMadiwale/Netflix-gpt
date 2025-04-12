import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { Popular_Movies_Url } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(Popular_Movies_Url, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  // Making API call inside useEffect.
  // Empty Parenthesis so it will get called 1 time
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
