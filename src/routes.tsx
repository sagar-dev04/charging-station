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
import ProtectedRoute from "./ProtectedRoute";
import Settings from "./pages/settings/Settings";
import UploadData from "./pages/uploadData/UploadData";
import PageNotFound from "./pages/layout/PageNotFound";
import Notifications from "./pages/notifications/Notifications";
import PendingRequests from "./pages/pendingRequests/PendingRequests";


export const router = createBrowserRouter([
  // Define the application's routing structure
  {
    path: LOGIN,
    element: <ProtectedRoute endpoint={LOGIN} element={<Login />} />,
  },
  {
    // Route for the upload data page
    // Route for the main application layout
    // Route for the login page
    path: APP,
    element: <ProtectedRoute element={<Layout />} />,
    children: [
      // Nested routes within the main application layout
      {
        path: UPLOAD_DATA,
        element: <ProtectedRoute element={<UploadData />} />,
      },
      {
        // Route for the home page
        // Route for the notifications page
        path: NOTIFICATIONS,
        element: <ProtectedRoute element={<Notifications />} />,
      },
      {
        // Route for the pending requests page
        path: PENDING_REQUESTS,
        element: <ProtectedRoute element={<PendingRequests />} />,
      },

      {
        path: HOME,
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        // Route for the settings page
        path: SETTINGS,
        element: <ProtectedRoute element={<Settings />} />,
      },
    ],
  },
  {
    // Catch-all route for undefined paths, rendering a "Page Not Found" component
    path: "*",
    element: <PageNotFound />,
  },
]);
