import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://weak-elk-lab-coat.cyclic.app/api/v1",
  }),
  endpoints: (builder) => ({}),
});
