import "@fontsource/inter";
import { CircularProgress } from "@mui/joy";
import { RouterProvider } from "react-router";

import "./App.css";
import { router } from "./routes";
import { useAuth } from "./contexts/useAuth";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <CircularProgress />; // Or a spinner component
  }

  // Main application component that sets up routing and authentication
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
