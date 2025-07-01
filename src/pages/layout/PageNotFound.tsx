import { Button, Stack } from "@mui/joy";
import { useNavigate } from "react-router";

import { HOME } from "../../urls";

const PageNotFound = () => {
  // Component for rendering a 404 Not Found page with a redirect option
  const navigate = useNavigate();
  // Hook to programmatically navigate to other routes

  return (
    <Stack
      gap="2rem"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      {/* Centered stack for displaying the 404 image and navigation button */}
      <img src="/page_not_found.svg" alt="404 Not Found" />
      {/* Image representing the 404 error */}
      <Button color="lime" onClick={() => navigate(HOME)}>
        Go to Home
      </Button>
      {/* Button to navigate back to the home page */}
    </Stack>
  );
};

export default PageNotFound;
// Export the PageNotFound component for use in routing
