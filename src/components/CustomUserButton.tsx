import { useClerk } from "@clerk/clerk-react";
import { FaUserCircle } from "react-icons/fa";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

const CustomUserButton = () => {
  // Component for rendering a user button with a dropdown menu
  const { signOut } = useClerk();
  // Access the signOut function from Clerk for user authentication

  return (
    <Dropdown>
      {/* Dropdown menu for user actions */}
      <MenuButton variant="plain" color="neutral" sx={{ minWidth: "2rem" }}>
        <FaUserCircle fontSize="1.4rem" />
        {/* User icon displayed on the button */}
      </MenuButton>
      <Menu size="sm" variant="outlined" placement="bottom-end">
        <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
        {/* Menu item to trigger user sign-out */}
      </Menu>
    </Dropdown>
  );
};

export default CustomUserButton;
// Export the CustomUserButton component for use in other parts of the application
