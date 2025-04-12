import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
  // here we will have object of different data of user
  {
    name: "user",
    initialState: null,
    reducers: {
      addUser: (state, action) => {
        return action.payload;
      },
      removeUser: (state, action) => {
        return null;
      },
    },
  }
);

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
