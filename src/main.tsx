import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssVarsProvider } from "@mui/joy/styles";
import { customTheme } from "./common/theme.ts";

import "../index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider theme={customTheme} defaultMode="dark">
      <App />
    </CssVarsProvider>
  </StrictMode>
);
