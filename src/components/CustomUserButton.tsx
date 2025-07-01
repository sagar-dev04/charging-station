import { FaUserCircle } from "react-icons/fa";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { useNavigate } from "react-router";

import { auth } from "../firebase";
import { LOGIN } from "../urls";

const CustomUserButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigate(LOGIN);
    });
  };

  return (
    <Dropdown>
      {/* Dropdown menu for user actions */}
      <MenuButton variant="plain" color="neutral" sx={{ minWidth: "2rem" }}>
        <FaUserCircle fontSize="1.4rem" />
        {/* User icon displayed on the button */}
      </MenuButton>
      <Menu size="sm" variant="outlined" placement="bottom-end">
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
        {/* Menu item to trigger user sign-out */}
      </Menu>
    </Dropdown>
  );
};

export default CustomUserButton;
// Export the CustomUserButton component for use in other parts of the application
