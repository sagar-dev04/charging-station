// SearchAndActionBar.tsx
import { BsStars } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Stack, Input, Button } from "@mui/joy";

const SearchAndActionBar = () => (
  // Component for rendering a search bar and action buttons
  <Stack width="100%" direction="row" gap="1rem">
    {/* Horizontal stack for aligning the search input and action buttons */}
    <Input
      // Input field for search functionality with a search icon
      fullWidth
      placeholder="Search"
      startDecorator={<IoIosSearch fontSize="1.2rem" />}
    />
    <Button color="neutral" variant="outlined" startDecorator={<BsStars />}>
      {/* Button for autofill functionality */}
      Autofill
    </Button>
    <Button color="lime" variant="outlined" startDecorator={<MdRefresh />}>
      {/* Button for rerunning actions */}
      Rerun
    </Button>
  </Stack>
);

export default SearchAndActionBar;
// Export the SearchAndActionBar component for use in other views
