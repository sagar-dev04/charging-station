// DescriptionCard.tsx
import { Box, Card, Typography } from "@mui/joy";
import { FiInfo } from "react-icons/fi";
import { Colors } from "../../../common/colors";

const DescriptionCard = ({ chip }) => {
  // Component for rendering a card with a variable's name and description
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
      {/* Container for the description card */}
      <Card
        // Card component styled with padding, background color, and animation
        sx={{
          p: "2rem",
          width: "100%",
          bgcolor: Colors.BLACK_40,
          borderRadius: "0 0 0.5rem 0.5rem",
          animation: "fadeSlideIn 0.3s ease forwards",
        }}
      >
        <Typography level="20-medium" endDecorator={<FiInfo />}>
          {/* Displays the variable name with an info icon */}
          {chip.variableName}
        </Typography>
        <Typography level="15-regular" textColor={Colors.GRAY_10}>
          {/* Displays the variable description */}
          {chip.description}
        </Typography>
      </Card>
    </Box>
  );
};

export default DescriptionCard;
// Export the DescriptionCard component for use in other views
