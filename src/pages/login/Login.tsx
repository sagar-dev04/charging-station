import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Stack, Typography } from "@mui/joy";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";

import { HOME } from "../../urls";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already signed in and redirect to HOME
    const isSignedIn = localStorage.getItem("isSignedIn"); // Replace with actual auth check
    if (isSignedIn) {
      navigate(HOME);
    }
  }, [navigate]);

  return (
    <SignedOut>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.body",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            width: "100%",
            maxWidth: "400px",
            p: 4,
            borderRadius: "lg",
            boxShadow: "lg",
            bgcolor: "background.surface",
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Typography level="h2" component="h1">
              Data Visualization Platform
            </Typography>
            <Typography level="body-md" textAlign="center">
              Sign in to access your dashboard and analytics
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <SignInButton forceRedirectUrl={HOME}>
              <Button size="lg" variant="solid" color="primary" fullWidth>
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
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
