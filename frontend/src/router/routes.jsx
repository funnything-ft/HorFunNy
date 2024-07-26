import { createBrowserRouter } from "react-router-dom";
import Layout, { CheckSessionExpiration } from "../pages/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login, { action as loginAction } from "../pages/Login";
import Register, { action as registerAction } from "../pages/Register";
import { action as logoutAction } from "../pages/Logout";
import Profile, {
  loader as ProfileLoader,
  action as UploadPost,
} from "../pages/Profile";
import EditProfile, { action as EditProfileAction } from "../pages/EditProfile";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    loader: CheckSessionExpiration,
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
            action: UploadPost,
            element: (
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            ),
          },
          {
            path: "edit/:form",
            element: (
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            ),
            action: EditProfileAction,
          },
        ],
      },
    ],
  },
]);

export default router;
