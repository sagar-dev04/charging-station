import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { SignedIn } from "@clerk/clerk-react";
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
  const [menuIndex, setMenuIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
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
      <Stack direction="row" width="100%" height="100%">
        <Stack
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
        </Stack>
        <Outlet />
      </Stack>
    </SignedIn>
  );
};

export default Layout;
