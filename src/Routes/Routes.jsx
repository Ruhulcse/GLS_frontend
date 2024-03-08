import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetails from '../pages/Blog/subPage/BlogDetails'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Layout></Layout>,
    children: [
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
    ],
  },
  {
    path: "/blog/:id",
    element: <Layout></Layout>,
    children: [
      {
        path: "/blog/:id",
        element: <BlogDetails/>,
      },
    ],
  },
]);
