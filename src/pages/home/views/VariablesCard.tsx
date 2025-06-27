// VariablesCard.tsx
import { BsStars } from "react-icons/bs";
import { IoAddOutline, IoCheckmarkOutline } from "react-icons/io5";
import { Box, Card, Stack, Typography, Chip, Checkbox } from "@mui/joy";

interface VariableCardProps {
  data: {
    categoryName: string;
    variables: {
      name: string;
      description?: string;
    }[];
  }[];
  onHoverEnd: () => void;
  showDescription?: boolean;
  getSelectionCount: (categoryName: string) => number;
  isSelected: (categoryName: string, variableName: string) => boolean;
  toggleSelection: (categoryName: string, variableName: string) => void;
  onHoverStart: (chip: { variableName: string; description: string }) => void;
}

const VariablesCard = (props: VariableCardProps) => {
  const {
    data,
    isSelected,
    onHoverEnd,
    onHoverStart,
    toggleSelection,
    showDescription,
    getSelectionCount,
  } = props;

  return (
    <Card
      sx={{
        p: "1.5rem",
        height: "20rem",
        overflowY: "auto",
        borderRadius: showDescription ? "0.5rem 0.5rem 0 0" : "md",
      }}
    >
      <Stack gap="1.5rem">
        {data.map((category, index) => (
          <Box key={index}>
            <Stack gap="1rem">
              <Typography level="15-medium">
                {category.categoryName}{" "}
                {getSelectionCount(category.categoryName) > 0 &&
                  `(${getSelectionCount(category.categoryName)} selected)`}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {category.variables.map((variable) => {
                  const selected = isSelected(
                    category.categoryName,
                    variable.name
                  );
                  return (
                    <Chip
                      key={variable.name}
                      variant="plain"
                      color={selected ? "lime" : "neutral"}
                      endDecorator={
                        <Stack ml="0.5rem" direction="row" gap="0.2rem">
                          <BsStars fontSize="0.8rem" />
                          {selected ? <IoCheckmarkOutline /> : <IoAddOutline />}
                        </Stack>
                      }
                      onMouseEnter={() =>
                        selected &&
                        onHoverStart({
                          variableName: variable.name,
                          description: variable.description || "No description",
                        })
                      }
                      onMouseLeave={onHoverEnd}
                    >
                      <Checkbox
                        overlay
                        size="sm"
                        disableIcon
                        variant="outlined"
                        checked={selected}
                        label={variable.name}
                        color={selected ? "lime" : "neutral"}
                        onChange={() =>
                          toggleSelection(category.categoryName, variable.name)
                        }
                      />
                    </Chip>
                  );
                })}
              </Stack>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};

export default VariablesCard;
