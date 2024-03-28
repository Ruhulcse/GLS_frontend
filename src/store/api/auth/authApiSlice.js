import { apiSlice } from "../apiSlice";
import { setUser } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg,{queryFulfilled,dispatch}){
        const result = await queryFulfilled;
        localStorage.setItem(
          "auth",
          JSON.stringify({
            accessToken:result.data.token
          })
        ),
        dispatch(
          setUser({
            token:result.data.token
          })
        )
      }
    }),
  }),
});
export const { useRegisterUserMutation, useLoginMutation } = authApi;
