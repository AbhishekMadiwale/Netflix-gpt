import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { Upcoming_Movies_Url } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(Upcoming_Movies_Url, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  // Making API call inside useEffect.
  // Empty Parenthesis so it will get called 1 time
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
