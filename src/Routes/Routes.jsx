import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import BlogPage from "../pages/Blog/BlogPage";

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
]);
