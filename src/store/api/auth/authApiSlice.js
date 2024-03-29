import { apiSlice } from '../apiSlice';
import { getUser } from '../user/userSlice';
import { setUser } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
	endpoints: builder => ({
		registerUser: builder.mutation({
			query: user => ({
				url: '/register',
				method: 'POST',
				body: user,
			}),
		}),
		login: builder.mutation({
			query: data => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				const result = await queryFulfilled;
				localStorage.setItem(
					'auth',
					JSON.stringify({
						accessToken: result.data.token,
						user_id: result.data._id,
					})
				),
					dispatch(
						setUser({
							token: result.data.token,
							user_id: result.data._id,
						})
					);
				dispatch(getUser({ user_id: result.data._id }));
			},
		}),
	}),
});
export const { useRegisterUserMutation, useLoginMutation } = authApi;
