import "@fontsource/inter";
import { RouterProvider } from "react-router";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import "./App.css";
import { router } from "./routes";

function App() {
  return (
    <div className="app">
      <SignedOut>
        <RouterProvider router={router} />
      </SignedOut>
      <SignedIn>
        <RouterProvider router={router} />
      </SignedIn>
    </div>
  );
}

export default App;
