import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { SignedIn } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router";
import CustomUserButton from "../../components/CustomUserButton";
import { IconButton, Stack, Tab, TabList, Tabs, Tooltip } from "@mui/joy";

import {
  HOME,
  SETTINGS,
  UPLOAD_DATA,
  NOTIFICATIONS,
  PENDING_REQUESTS,
} from "../../urls";
import { menuTabs } from "../../common/constants";

const Layout = () => {
  // Main layout component for the application, including navigation and content rendering
  const [menuIndex, setMenuIndex] = useState(0);
  // State to track the active menu tab index
  const navigate = useNavigate();

  useEffect(() => {
    // Effect to navigate to the appropriate route based on the active menu tab
    switch (menuIndex) {
      case 1:
        navigate(NOTIFICATIONS);
        break;
      case 2:
        navigate(PENDING_REQUESTS);
        break;
      case 3:
        navigate(UPLOAD_DATA);
        break;
      case 4:
        navigate(SETTINGS);
        break;
      default:
        navigate(HOME);
        break;
    }
  }, [menuIndex, navigate]);

  return (
    <SignedIn>
      {/* Render the layout only when the user is signed in */}
      <Stack direction="row" width="100%" height="100%">
        {/* Main container for the layout, including navigation and content */}
        <Stack
          // Sidebar stack for navigation and user actions
          py="1rem"
          width="5rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack gap="1rem" alignItems="center">
            <IconButton sx={{ width: "2.5rem", height: "2.5rem" }}>
              <IoMenu fontSize="1.4rem" />
            </IconButton>
            <Tabs
              // Vertical tabs for navigation between different sections
              value={menuIndex}
              orientation="vertical"
              aria-label="Bottom Navigation"
              sx={{
                width: "100%",
                bgcolor: "transparent",
                justifyContent: "center",
              }}
              onChange={(_event, value) => setMenuIndex(value as number)}
            >
              <TabList
                size="md"
                disableUnderline
                sx={{ borderRadius: "sm", p: 0, gap: "1rem" }}
              >
                {menuTabs.map((tab, tabIndex) => (
                  // Map through menu tabs and render each as a tooltip-wrapped tab
                  <Tooltip
                    size="sm"
                    key={tabIndex}
                    title={tab.label}
                    variant="outlined"
                    disableInteractive
                  >
                    <Tab
                      color="neutral"
                      disableIndicator
                      orientation="vertical"
                      sx={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      variant={tabIndex === menuIndex ? "outlined" : "plain"}
                    >
                      {tab.icon}
                    </Tab>
                  </Tooltip>
                ))}
              </TabList>
            </Tabs>
          </Stack>
          <CustomUserButton />
          {/* User button for account-related actions */}
        </Stack>
        <Outlet />
        {/* Placeholder for rendering the active route's content */}
      </Stack>
    </SignedIn>
  );
};

export default Layout;
// Export the Layout component for use in routing
