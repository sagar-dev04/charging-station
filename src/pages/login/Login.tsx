import { Card, Stack, Input, Button, Divider, Typography } from "@mui/joy";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { HOME } from "../../urls";
import { auth, provider } from "../../firebase";
import { useAuth } from "../../contexts/useAuth";

function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      navigate(HOME);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate(HOME);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailRegister = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(HOME);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(HOME);
    }
  }, [navigate, user]);


  return (
    <Stack
      spacing={2}
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Card variant="outlined" sx={{ width: 340, p: 3 }}>
        <Typography level="h4" textAlign="center" mb={2}>
          Welcome to Charge Viz!
        </Typography>
        <Stack spacing={1}>
          <Input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            color="lime"
            loading={loading}
            onClick={handleEmailLogin}
            disabled={!email || !password}
          >
            Sign In with Email
          </Button>
          <Button
            loading={loading}
            variant="plain"
            color="lime"
            onClick={handleEmailRegister}
          >
            Register with Email
          </Button>
          <Divider>OR</Divider>
          <Button color="lime" loading={loading} onClick={handleGoogleLogin}>
            Sign In with Google
          </Button>
          {error && (
            <Typography level="body-sm" color="danger">
              {error}
            </Typography>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}

export default Login;
