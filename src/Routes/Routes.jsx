import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Carrier from "../pages/Solutions/Carrier";
import Brokers from "../pages/Solutions/Brokers";
import Shippers from "../pages/Solutions/Shippers";

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
        path: "/carrier",
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
]);
