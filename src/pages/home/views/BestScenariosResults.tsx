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
  return (
    <AccordionGroup
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
              <Alert
                key={index}
                color="lime"
                variant="outlined"
                endDecorator={
                  <Tooltip variant="outlined" title="Options" placement="top">
                    <IconButton color="lime">
                      <HiOutlineDotsHorizontal fontSize="1.3rem" />
                    </IconButton>
                  </Tooltip>
                }
              >
                <Typography level="16-medium" textColor={Colors.LIME_500}>
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
