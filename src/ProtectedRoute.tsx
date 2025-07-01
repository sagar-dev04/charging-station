import React from "react";
import { Navigate } from "react-router";

import { LOGIN } from "./urls";
import Layout from "./pages/layout/Layout";
import { useAuth } from "./contexts/useAuth";

const ProtectedRoute: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={LOGIN} replace />;
  }

  return <Layout />;
};

export default ProtectedRoute;
