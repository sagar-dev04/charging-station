import {
  Tab,
  Tabs,
  Input,
  Stack,
  Button,
  TabList,
  Typography,
  IconButton,
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
  const [index, setIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Stack width={`calc(100vw - 5rem)`} height="100%">
      <Stack
        gap="1rem"
        direction="row"
        padding="1.5rem 1.25rem"
        justifyContent="space-between"
      >
        <Tabs
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
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography level="32-semibold" startDecorator={<GiElectric />}>
            {homeTabs[index].label}
          </Typography>
          <Stack direction="row" gap="1rem">
            <IconButton size="lg" variant="outlined">
              <PiClockCounterClockwiseBold fontSize="1.4rem" />
            </IconButton>
            <Button
              size="lg"
              color="neutral"
              variant="outlined"
              onClick={() => setOpenDrawer(true)}
            >
              Edit Variables
            </Button>
            <IconButton size="lg" variant="outlined">
              <LuUpload fontSize="1.4rem" />
            </IconButton>
          </Stack>
        </Stack>
        <BestScenariosResults />
        <Stack rowGap="3rem" flexWrap="wrap" direction="row" columnGap="1rem">
          <Graphs />
          <KeyPerformanceIndicators />
        </Stack>
      </Stack>
      <EditVariables openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Stack>
  );
};

export default Home;
