/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

//const storedUser = JSON.parse(localStorage.getItem("user"));

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
		isLoggedIn: false,
		// email:undefined
	},
	reducers: {
		setUser: (state, action) => {
			state.token = action.payload.token;
			state.isLoggedIn = true;
			//state.email = action.payload;
		},
		logOut: (state, action) => {
			state.token = null;
			state.isLoggedIn = false;
			//state.isAuth = false;
		},
	},
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
