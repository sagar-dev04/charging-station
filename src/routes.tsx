/*
 *
 * Route configuration based on url
 *
 */

import { createBrowserRouter } from "react-router";

import {
  APP,
  HOME,
  LOGIN,
  SETTINGS,
  UPLOAD_DATA,
  NOTIFICATIONS,
  PENDING_REQUESTS,
} from "./urls";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import Settings from "./pages/settings/Settings";
import UploadData from "./pages/uploadData/UploadData";
import PageNotFound from "./pages/layout/PageNotFound";
import Notifications from "./pages/notifications/Notifications";
import PendingRequests from "./pages/pendingRequests/PendingRequests";

export const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: APP,
    element: <Layout />,
    children: [
      {
        path: UPLOAD_DATA,
        element: <UploadData />,
      },
      {
        path: NOTIFICATIONS,
        element: <Notifications />,
      },
      {
        path: PENDING_REQUESTS,
        element: <PendingRequests />,
      },

      {
        path: HOME,
        element: <Home />,
      },
      {
        path: SETTINGS,
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
