// SearchAndActionBar.tsx
import { BsStars } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Stack, Input, Button } from "@mui/joy";

const SearchAndActionBar = () => (
  <Stack width="100%" direction="row" gap="1rem">
    <Input
      fullWidth
      placeholder="Search"
      startDecorator={<IoIosSearch fontSize="1.2rem" />}
    />
    <Button color="neutral" variant="outlined" startDecorator={<BsStars />}>
      Autofill
    </Button>
    <Button color="lime" variant="outlined" startDecorator={<MdRefresh />}>
      Rerun
    </Button>
  </Stack>
);

export default SearchAndActionBar;
