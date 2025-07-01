import { Stack } from "@mui/joy";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

import SideNavTabs from "../../components/SideNavTabs";
import CustomUserButton from "../../components/CustomUserButton";

const Layout = () => {
  // Main layout component for the application, including navigation and content rendering
  // State to track the active menu tab index
  const navigate = useNavigate();

  useEffect(() => {
    // Effect to navigate to the appropriate route based on the active menu tab
  }, [navigate]);

  return (
    <Stack direction="row" width="100%" height="100%">
      {/* Main container for the layout, including navigation and content */}
      <Stack
        // Sidebar stack for navigation and user actions
        py="1rem"
        width="5rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <SideNavTabs />
        <CustomUserButton />
        {/* User button for account-related actions */}
      </Stack>
      <Outlet />
      {/* Placeholder for rendering the active route's content */}
    </Stack>
  );
};

export default Layout;
// Export the Layout component for use in routing
