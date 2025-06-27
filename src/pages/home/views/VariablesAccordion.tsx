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
  <AccordionGroup
    disableDivider
    sx={{
      gap: "1rem",
      ".MuiAccordionSummary-root > button:hover": {
        backgroundColor: "transparent !important",
      },
    }}
  >
    {data.map((item, index) => (
      <Accordion
        key={index}
        variant="outlined"
        sx={{
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          border: `1px solid ${Colors.BLACK_30}`,
        }}
      >
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
          <Typography level="20-medium" textColor={Colors.LIME_10}>
            {item.summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{item.details}</AccordionDetails>
      </Accordion>
    ))}
  </AccordionGroup>
);

export default VariablesAccordion;
