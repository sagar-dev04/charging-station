import {
  Tab,
  Tabs,
  Input,
  Stack,
  Button,
  TabList,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/joy";
import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { GiElectric } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

import Graphs from "./views/Graphs";
import { Colors } from "../../common/colors";
import { homeTabs } from "../../common/constants";
import EditVariables from "./views/EditVariables";
import BestScenariosResults from "./views/BestScenariosResults";
import KeyPerformanceIndicators from "./views/KeyPerformanceIndicators";

const Home = () => {
  // Main component for rendering the home page, including tabs, search, and graphs
  const [index, setIndex] = useState(0);
  // State to manage the active tab index
  const [openDrawer, setOpenDrawer] = useState(false);
  // State to manage the visibility of the Edit Variables drawer

  return (
    <Stack width={`calc(100vw - 5rem)`} height="100%">
      <Stack
        gap="1rem"
        direction="row"
        padding="1.5rem 1.25rem"
        justifyContent="space-between"
      >
        <Tabs
          // Tab navigation for switching between different sections of the home page
          value={index}
          aria-label="Bottom Navigation"
          sx={{ bgcolor: "transparent" }}
          onChange={(_event, value) => setIndex(value as number)}
        >
          <TabList size="md" disableUnderline sx={{ borderRadius: "sm", p: 0 }}>
            {homeTabs.map((tab, tabIndex) => (
              <Tab
                key={tabIndex}
                color="neutral"
                disableIndicator
                orientation="vertical"
                variant={tabIndex === index ? "outlined" : "plain"}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <Input
          // Search bar with an icon for filtering content
          placeholder="Search"
          startDecorator={<IoIosSearch fontSize="1.2rem" />}
        />
      </Stack>
      <Stack
        flex={1}
        gap="2rem"
        padding="2rem"
        overflow="auto"
        borderRadius="0.313rem"
        bgcolor={Colors.BLACK_20}
        border={`1px solid ${Colors.BLACK_30}`}
      >
        <Stack
          // Container for the main content area, including graphs and KPIs
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography level="32-semibold" startDecorator={<GiElectric />}>
            {/* Title for the active tab, with an electric icon */}
            {homeTabs[index].label}
          </Typography>
          <Stack direction="row" gap="1rem">
            <Tooltip title="History" variant="outlined" placement="top">
              <IconButton size="lg" variant="outlined">
                <PiClockCounterClockwiseBold fontSize="1.4rem" />
              </IconButton>
            </Tooltip>
            <Button
              size="lg"
              color="neutral"
              variant="outlined"
              onClick={() => setOpenDrawer(true)}
            >
              Edit Variables
            </Button>
            <Tooltip title="Upload" variant="outlined" placement="top">
              <IconButton size="lg" variant="outlined">
                <LuUpload fontSize="1.4rem" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <BestScenariosResults />
        {/* Component to display the best scenario results */}
        <Stack rowGap="3rem" flexWrap="wrap" direction="row" columnGap="1rem">
          <Graphs />
          {/* Component to render data visualization graphs */}
          <KeyPerformanceIndicators />
          {/* Component to display key performance indicators */}
        </Stack>
      </Stack>
      <EditVariables openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {/* Drawer component for editing variables */}
    </Stack>
  );
};

export default Home;
// Export the Home component for use in routing and other parts of the application
