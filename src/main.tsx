import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { customTheme } from "./common/theme.ts";
import { CssVarsProvider } from "@mui/joy/styles";

import "../index.css";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  // Initialize the React application and render it into the root DOM element
  <StrictMode>
    {/* Enable React's StrictMode for highlighting potential issues */}
    <AuthProvider>
      {/* Provide authentication context using Clerk */}
      <CssVarsProvider theme={customTheme} defaultMode="dark">
        {/* Apply custom Material-UI theme with dark mode as default */}
        <App />
        {/* Render the main application component */}
      </CssVarsProvider>
    </AuthProvider>
  </StrictMode>
);
