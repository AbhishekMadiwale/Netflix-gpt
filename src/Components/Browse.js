import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from "../utils/moviesSlice"

const Browse = () => {

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json)
    dispatch(addNowPlayingMovies(json.results))
  } 

  // Making API call inside useEffect.
  // Empty Parenthesis so it will get called 1 time
  useEffect(() => {
    getNowPlayingMovies();
  },[])
  return (
    <Header/>
  )
}

export default Browse