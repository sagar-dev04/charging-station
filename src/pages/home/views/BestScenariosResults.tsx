import {
  Stack,
  Alert,
  Tooltip,
  Accordion,
  Typography,
  IconButton,
  AccordionGroup,
  AccordionSummary,
  AccordionDetails,
} from "@mui/joy";
import { BsStars } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import { Colors } from "../../../common/colors";
import { bestScenarioResults } from "../../../common/constants";

const BestScenariosResults = () => {
  // Component for displaying the best scenario results in an accordion format
  return (
    <AccordionGroup
      // Group of accordions for organizing scenario results
      disableDivider
      sx={{
        flex: 0,
        gap: "1rem",
        ".MuiAccordionSummary-root > button:hover": {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Accordion defaultExpanded sx={{ padding: "0.5rem 0rem" }}>
        {/* Accordion for the best scenario results */}
        <AccordionSummary
          color="lime"
          indicator={
            <IoIosArrowDown
              style={{
                borderRadius: "2rem",
                padding: "0.5rem 0.75rem",
                border: `1px solid ${Colors.LIME_10}`,
              }}
            />
          }
        >
          <Typography
            // Title for the accordion with a decorative icon
            level="20-medium"
            textColor={Colors.LIME_10}
            startDecorator={<BsStars />}
          >
            Best Scenario Results
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap="1rem" marginTop="1rem">
            {bestScenarioResults.map((result, index) => (
              // Map through the scenario results and render each as an alert
              <Alert
                key={index}
                color="lime"
                variant="outlined"
                endDecorator={
                  <Tooltip variant="outlined" title="Options" placement="top">
                    {/* Tooltip for additional options */}
                    <IconButton color="lime">
                      <HiOutlineDotsHorizontal fontSize="1.3rem" />
                    </IconButton>
                  </Tooltip>
                }
              >
                <Typography level="16-medium" textColor={Colors.LIME_500}>
                  {/* Display the scenario result text */}
                  {result}
                </Typography>
              </Alert>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};

export default BestScenariosResults;
// Export the BestScenariosResults component for use in the home page
