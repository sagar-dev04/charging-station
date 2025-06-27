// VariablesAccordion.tsx
import {
  Accordion,
  Typography,
  AccordionGroup,
  AccordionDetails,
  AccordionSummary,
} from "@mui/joy";
import { IoIosArrowDown } from "react-icons/io";

import { Colors } from "../../../common/colors";

const VariablesAccordion = ({ data }) => (
  // Component for rendering an accordion group to display variable categories
  <AccordionGroup
    // Group of accordions for organizing variable categories
    disableDivider
    sx={{
      gap: "1rem",
      ".MuiAccordionSummary-root > button:hover": {
        backgroundColor: "transparent !important",
      },
    }}
  >
    {data.map((item, index) => (
      // Map through the data to render each category as an accordion
      <Accordion
        // Accordion component styled with borders and padding
        key={index}
        variant="outlined"
        sx={{
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          border: `1px solid ${Colors.BLACK_30}`,
        }}
      >
        <AccordionSummary
          // Summary section of the accordion with a title and an indicator
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
          <Typography level="20-medium" textColor={Colors.LIME_10}>
            {/* Displays the summary title for the accordion */}
            {item.summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{item.details}</AccordionDetails>
        {/* Displays the details content of the accordion */}
      </Accordion>
    ))}
  </AccordionGroup>
);

export default VariablesAccordion;
// Export the VariablesAccordion component for use in other views
