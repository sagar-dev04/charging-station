import "@fontsource/inter";
import { RouterProvider } from "react-router";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import "./App.css";
import { router } from "./routes";

function App() {
  // Main application component that sets up routing and authentication
  return (
    <div className="app">
      {/* Root container for the application */}
      <SignedOut>
        {/* Renders the router when the user is signed out */}
        <RouterProvider router={router} />
      </SignedOut>
      <SignedIn>
        {/* Renders the router when the user is signed in */}
        <RouterProvider router={router} />
      </SignedIn>
    </div>
  );
}

export default App;
// Exports the App component as the default export
