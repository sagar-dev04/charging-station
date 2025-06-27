import { IoIosAdd } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Button, Card, Stack, Typography } from "@mui/joy";

import { Colors } from "../../../common/colors";
import { keyPerformanceIndicatorsData } from "../../../common/constants";

const KeyPerformanceIndicators = () => {
  // Component for displaying key performance indicators (KPIs) in a card layout
  return (
    <Stack flex={3} gap="1rem">
      {/* Main container for the KPI section */}
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        {/* Header section with title and a button for adding variables */}
        <Typography level="24-semibold">Key Performance Indicators</Typography>
        <Button
          size="sm"
          color="neutral"
          variant="outlined"
          endDecorator={<IoIosAdd fontSize="1.5rem" />}
        >
          Variables
        </Button>
      </Stack>
      <Stack gap="1rem" direction="row" flexWrap="wrap" height="100%">
        {/* Container for displaying KPI cards */}
        {keyPerformanceIndicatorsData.map((item, index) => (
          // Map through KPI data and render each as a card
          <Card
            // Card component styled for displaying individual KPI details
            key={index}
            sx={{
              p: "2rem",
              gap: "1rem",
              minHeight: "8rem",
              boxSizing: "border-box",
              bgcolor: Colors.BLACK_40,
              minWidth: "200px", // ensures it's not too small on smaller screens
              flex: "1 1 calc(50% - 1rem)", // 50% minus the gap to prevent wrapping early
            }}
          >
            <Stack
              // Stack for aligning the KPI header and info icon
              gap="0.5rem"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography level="18-medium">{item.header}</Typography>
              {/* Displays the KPI header */}
              <AiOutlineQuestionCircle />
            </Stack>
            <Typography level="12-regular" textColor={Colors.GRAY_10}>
              {/* Displays the KPI description */}
              {item.description}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default KeyPerformanceIndicators;
// Export the KeyPerformanceIndicators component for use in the home page
