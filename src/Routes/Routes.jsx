import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import BlogPage from "../pages/Blog/BlogPage";
import AboutDetails from "../pages/Blog/subPage/AboutDetails";
import BlogDetails from "../pages/Blog/subPage/BlogDetails";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
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
        element: <BlogDetails />,
      },
      {
        path: "/about/:id",
        element: <AboutDetails />,
      },
    ],
  },
]);
