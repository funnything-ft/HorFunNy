import { createBrowserRouter } from "react-router-dom";
import Layout, { checkSessionExpiration } from "../pages/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login, { action as loginAction } from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    loader: checkSessionExpiration,
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
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
