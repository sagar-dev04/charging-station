import { Button, Stack } from "@mui/joy";
import { useNavigate } from "react-router";

import { HOME } from "../../urls";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Stack gap="2rem" alignItems="center" justifyContent="center" minHeight="100vh">
      <img src="../../../public/page_not_found.svg" alt="404 Not Found" />
      <Button color="lime" onClick={() => navigate(HOME)}>Go to Home</Button>
    </Stack>
  );
};

export default PageNotFound;
