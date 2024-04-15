import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://weak-elk-lab-coat.cyclic.app/api/v1",
    baseUrl: "http://localhost:5000/api/v1",
    
  }),
  endpoints: (builder) => ({}),
});
