import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

//const storedUser = JSON.parse(localStorage.getItem("user"));

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token:undefined,
   // email:undefined
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      //state.email = action.payload;
    },
    logOut: (state, action) => {
      state.token = undefined;
      //state.isAuth = false;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
