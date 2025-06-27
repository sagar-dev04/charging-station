import { IoIosAdd } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Button, Card, Stack, Typography } from "@mui/joy";

import { Colors } from "../../../common/colors";
import { keyPerformanceIndicatorsData } from "../../../common/constants";

const KeyPerformanceIndicators = () => {
  return (
    <Stack flex={3} gap="1rem">
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Typography level="24-semibold">Key Performance Indicators</Typography>
        <Button
          size="sm"
          color="neutral"
          variant="outlined"
          endDecorator={<IoIosAdd fontSize="1.5rem" />}
        >
          Variables
        </Button>
      </Stack>
      <Stack gap="1rem" direction="row" flexWrap="wrap" height="100%">
        {keyPerformanceIndicatorsData.map((item, index) => (
          <Card
            key={index}
            sx={{
              p: "2rem",
              gap: "1rem",
              minHeight: "8rem",
              boxSizing: "border-box",
              bgcolor: Colors.BLACK_40,
              minWidth: "200px", // ensures it's not too small on smaller screens
              flex: "1 1 calc(50% - 1rem)", // 50% minus the gap to prevent wrapping early
            }}
          >
            <Stack
              gap="0.5rem"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography level="18-medium">{item.header}</Typography>
              <AiOutlineQuestionCircle />
            </Stack>
            <Typography level="12-regular" textColor={Colors.GRAY_10}>
              {item.description}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default KeyPerformanceIndicators;
