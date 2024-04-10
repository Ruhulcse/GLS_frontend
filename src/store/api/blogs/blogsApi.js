import { apiSlice } from "../apiSlice";

const token = JSON.parse(localStorage.getItem('auth'));
export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs : builder.query({
      query: () => ({
      url:"/blogs",
      method:"GET"
      }),
      providesTags: ["Blogs"]
    }),
    getBlogsByID : builder.query({
      query: (id) => ({
      url:`/blogs/${id}`,
      }),
    }),
    postBlog: builder.mutation({
      query: (data) => ({
        url:"/blogs/create",
        method: "POST",
        body: data,
        headers: {
          Authorization : `Bearer ${token?.accessToken}`
        }
      }),
      invalidatesTags: ["Blogs"]
    }),
    removeBlog: builder.mutation({
      query: (id) => ({
        url:`/blogs/${id}`,
        method: "DELETE",
        headers: {
          Authorization : `Bearer ${token?.accessToken}`
        }
      }),
      invalidatesTags: ["Blogs"]
    }),
    updateBlog: builder.mutation({
      query: data => ({
        url:`/blogs/${data.id}`,
        method: "PUT",
        body: data.body,
        headers: {
          Authorization : `Bearer ${token?.accessToken}`
        },
      }),
      invalidatesTags: ["Blogs"]
    }),
  })
})

export const { useGetBlogsQuery, useGetBlogsByIDQuery, useUpdateBlogMutation, usePostBlogMutation, useRemoveBlogMutation } = blogsApi