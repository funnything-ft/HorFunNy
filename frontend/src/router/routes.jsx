import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login, { action as loginAction } from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
]);

export default router;
