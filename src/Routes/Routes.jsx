import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Carrier from "../pages/Solutions/Carrier";
import Brokers from "../pages/Solutions/Brokers";
import Shippers from "../pages/Solutions/Shippers";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetails from "../pages/Blog/subPage/BlogDetails";

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
        path: "/carriers",
        element: <Carrier></Carrier>,
      },
      {
        path: "/brokers",
        element: <Brokers></Brokers>,
      },
      {
        path: "/shippers",
        element: <Shippers></Shippers>,
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
        element: <BlogDetails />,
      },
    ],
  },
]);
