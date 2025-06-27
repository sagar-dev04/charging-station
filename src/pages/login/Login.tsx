import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Stack, Typography } from "@mui/joy";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";

import { HOME } from "../../urls";

const Login = () => {
  // Component for rendering the login page with sign-in and sign-up options
  const navigate = useNavigate();
  // Hook to programmatically navigate to other routes

  useEffect(() => {
    // Redirect to the home page if the user is already signed in
    // Check if the user is already signed in and redirect to HOME
    const isSignedIn = localStorage.getItem("isSignedIn"); // Replace with actual auth check
    if (isSignedIn) {
      navigate(HOME);
    }
  }, [navigate]);

  return (
    <SignedOut>
      {/* Render the login page only when the user is signed out */}
      <Box
        // Container for the login page layout
        sx={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.body",
        }}
      >
        <Stack
          // Stack for aligning the login form elements
          spacing={4}
          sx={{
            p: 4,
            width: "100%",
            boxShadow: "lg",
            maxWidth: "400px",
            borderRadius: "lg",
            bgcolor: "background.surface",
          }}
        >
          <Stack spacing={2} alignItems="center">
            {/* Header section with the platform title and description */}
            <Typography level="h2" component="h1">
              Data Visualization Platform
            </Typography>
            <Typography level="body-md" textAlign="center">
              Sign in to access your dashboard and analytics
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <SignInButton forceRedirectUrl={HOME}>
              {/* Button for signing in, redirects to the home page */}
              <Button size="lg" variant="solid" color="primary" fullWidth>
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              {/* Button for signing up */}
              <Button size="lg" variant="outlined" color="neutral" fullWidth>
                Sign Up
              </Button>
            </SignUpButton>
          </Stack>
        </Stack>
      </Box>
    </SignedOut>
  );
};

export default Login;
// Export the Login component for use in routing
