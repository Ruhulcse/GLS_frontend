/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('auth'));

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: storedUser?.accessToken ? storedUser?.accessToken : null,
		isLoggedIn: storedUser?.accessToken ? true : false,
		user_id: storedUser?.user_id ? storedUser?.user_id : null,
		userType: storedUser?.userType ? storedUser?.userType : null,
	},
	reducers: {
		setUser: (state, action) => {
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.user_id = action.payload.user_id;
			state.userType = action.payload.userType;
			//state.email = action.payload;
		},
		logOut: (state, action) => {
			state.token = null;
			state.isLoggedIn = false;
			state.user_id = null;
			state.userType = null;
		},
	},
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user_id;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUserType = (state) => state.auth.userType;
