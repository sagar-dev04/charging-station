import React from "react";
import { Navigate } from "react-router";
// Import Navigate for programmatic redirection
import { useAuth } from "@clerk/clerk-react";
// Import useAuth to check the user's authentication status

import { HOME } from "./urls";

const ProtectedRoute = ({
  element,
  endpoint,
}: {
  element: React.ReactElement;
  endpoint?: string;
}) => {
  const { isSignedIn } = useAuth();
    // Destructure isSignedIn to determine if the user is authenticated
  return isSignedIn ? (
    endpoint === "/" ? (
      <Navigate to={HOME} replace />
    ) : (
      element
    )
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
// Export the ProtectedRoute component for use in route configuration
