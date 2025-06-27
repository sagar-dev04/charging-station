// DescriptionCard.tsx
import { Box, Card, Typography } from "@mui/joy";
import { FiInfo } from "react-icons/fi";
import { Colors } from "../../../common/colors";

const DescriptionCard = ({ chip }) => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
      <Card
        sx={{
          p: "2rem",
          width: "100%",
          bgcolor: Colors.BLACK_40,
          borderRadius: "0 0 0.5rem 0.5rem",
          animation: "fadeSlideIn 0.3s ease forwards",
        }}
      >
        <Typography level="20-medium" endDecorator={<FiInfo />}>
          {chip.variableName}
        </Typography>
        <Typography level="15-regular" textColor={Colors.GRAY_10}>
          {chip.description}
        </Typography>
      </Card>
    </Box>
  );
};

export default DescriptionCard;
