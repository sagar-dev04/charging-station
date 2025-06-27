import "@fontsource/inter";
import { RouterProvider } from "react-router";

import "./App.css";
import { router } from "./routes";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
