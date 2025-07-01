import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { customTheme } from "./common/theme.ts";
import { CssVarsProvider } from "@mui/joy/styles";
import { ClerkProvider } from "@clerk/clerk-react";

import "../index.css";
import App from "./App.tsx";
import { HOME, LOGIN } from "./urls.ts";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// Fetch the Clerk publishable key from environment variables
if (!PUBLISHABLE_KEY) {
  // Throw an error if the Clerk publishable key is missing
  throw new Error("Missing Clerk Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  // Initialize the React application and render it into the root DOM element
  <StrictMode>
    {/* Enable React's StrictMode for highlighting potential issues */}
    <ClerkProvider
      afterSignOutUrl={LOGIN}
      publishableKey={PUBLISHABLE_KEY}
      signInFallbackRedirectUrl={HOME}
      signUpFallbackRedirectUrl={HOME}
    >
      {/* Provide authentication context using Clerk */}
      <CssVarsProvider theme={customTheme} defaultMode="dark">
        {/* Apply custom Material-UI theme with dark mode as default */}
        <App />
        {/* Render the main application component */}
      </CssVarsProvider>
    </ClerkProvider>
  </StrictMode>
);
