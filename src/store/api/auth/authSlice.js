/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

//const storedUser = JSON.parse(localStorage.getItem("user"));

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
		isLoggedIn: false,
		user_id: null,
		// email:undefined
	},
	reducers: {
		setUser: (state, action) => {
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.user_id = action.payload.user_id;
			//state.email = action.payload;
		},
		logOut: (state, action) => {
			state.token = null;
			state.isLoggedIn = false;
			state.user_id = null;
			//state.isAuth = false;
		},
	},
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
