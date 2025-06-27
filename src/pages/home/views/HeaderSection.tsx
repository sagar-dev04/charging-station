// HeaderSection.tsx
import { IoClose } from "react-icons/io5";
import { Stack, Typography, IconButton } from "@mui/joy";

const HeaderSection = ({ onClose }) => (
  <Stack direction="row" alignItems="center" justifyContent="space-between">
    <Typography level="32-semibold">Edit Variables</Typography>
    <IconButton onClick={onClose}>
      <IoClose fontSize="1.8rem" />
    </IconButton>
  </Stack>
);

export default HeaderSection;
