import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetails from '../pages/Blog/subPage/BlogDetails';
import Home from "../pages/Home/Home";
import AboutDetails from "../pages/Blog/subPage/AboutDetails";
import BlogListPage from "../pages/Blog/subPage/BlogListPage";
import SignUp from "./../auth/SignUp";
import Login from "../auth/Login";

export const router = createBrowserRouter([
  {
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails/>,
      },
      {
        path: '/blogs/:category',
        element: <BlogListPage/>
      },
      
      
    ],
  },
  
    {
      path:'/signUp',
      element:<SignUp/>
    },
    {
      path:'/logIn',
      element:<Login/>
    },
  
]);
