import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

// exporting actions from reducer
export const { addNowPlayingMovies } = moviesSlice.actions;

// exporting reducer from slice
export default moviesSlice.reducer;
