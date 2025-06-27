// HeaderSection.tsx
import { IoClose } from "react-icons/io5";
import { Stack, Typography, IconButton } from "@mui/joy";

const HeaderSection = ({ onClose }) => (
  // Component for rendering the header section of the Edit Variables drawer
  <Stack direction="row" alignItems="center" justifyContent="space-between">
    {/* Horizontal stack for aligning the title and close button */}
    <Typography level="32-semibold">Edit Variables</Typography>
    {/* Title for the header */}
    <IconButton onClick={onClose}>
      {/* Close button to dismiss the drawer */}
      <IoClose fontSize="1.8rem" />
    </IconButton>
  </Stack>
);

export default HeaderSection;
// Export the HeaderSection component for use in the Edit Variables drawer
