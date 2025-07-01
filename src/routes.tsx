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
    element: <Login />,
  },
  {
    // Route for the upload data page
    // Route for the main application layout
    // Route for the login page
    path: APP,
    element: <ProtectedRoute />,
    children: [
      // Nested routes within the main application layout
      // Route for the home page
      {
        path: HOME,
        index: true,
        element: <Home />,
      },
      {
        // Route for the upload data page
        path: UPLOAD_DATA,
        element: <UploadData />,
      },
      {
        // Route for the notifications page
        path: NOTIFICATIONS,
        element: <Notifications />,
      },
      {
        // Route for the pending requests page
        path: PENDING_REQUESTS,
        element: <PendingRequests />,
      },
      {
        // Route for the settings page
        path: SETTINGS,
        element: <Settings />,
      },
    ],
  },
  {
    // Catch-all route for undefined paths, rendering a "Page Not Found" component
    path: "*",
    element: <PageNotFound />,
  },
]);
