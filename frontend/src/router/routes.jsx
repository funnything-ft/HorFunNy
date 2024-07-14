import { createBrowserRouter } from "react-router-dom";
import Layout, { checkSessionExpiration } from "../pages/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login, { action as loginAction } from "../pages/Login";
import Register, { action as registerAction } from "../pages/Register";
import { action as logoutAction } from "../pages/Logout";
import Profile, { loader as ProfileLoader } from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

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
        action: registerAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "profile",
        loader: ProfileLoader,
        id: "profile-detail",
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
]);

export default router;
