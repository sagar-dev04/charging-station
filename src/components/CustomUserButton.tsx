import { useClerk } from "@clerk/clerk-react";
import { FaUserCircle } from "react-icons/fa";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

const CustomUserButton = () => {
  const { signOut } = useClerk();

  return (
    <Dropdown>
      <MenuButton
        variant="plain"
        color="neutral"
        sx={{ minWidth: "2rem" }}
      >
        <FaUserCircle fontSize="1.4rem" />
      </MenuButton>
      <Menu size="sm" variant="outlined" placement="bottom-end">
        <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default CustomUserButton;
