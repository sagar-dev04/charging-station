import {
  Box,
  Card,
  Chip,
  Input,
  Sheet,
  Stack,
  Button,
  Drawer,
  Checkbox,
  Accordion,
  Typography,
  IconButton,
  AccordionGroup,
  AccordionDetails,
  AccordionSummary,
} from "@mui/joy";
import { BsStars } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import { useState, useCallback } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { IoClose, IoAddOutline, IoCheckmarkOutline } from "react-icons/io5";

import { Colors } from "../../../common/colors";
import { dummyVariableData, variablesAccordionData } from "../../../common/constants";

interface EditVariablesProps {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
}

const EditVariables = (props: EditVariablesProps) => {
  const { openDrawer, setOpenDrawer } = props;

  // Category-wise state management - Map of categoryName -> Set of selected variable names
  const [selectedVariablesByCategory, setSelectedVariablesByCategory] =
    useState<Map<string, Set<string>>>(new Map());

  // Check if a variable is selected in a specific category
  const isVariableSelected = useCallback(
    (categoryName: string, variableName: string) => {
      const categorySelections = selectedVariablesByCategory.get(categoryName);
      return categorySelections ? categorySelections.has(variableName) : false;
    },
    [selectedVariablesByCategory]
  );

  // Toggle variable selection within a category
  const toggleVariableSelection = useCallback(
    (categoryName: string, variableName: string) => {
      setSelectedVariablesByCategory((prev) => {
        const newMap = new Map(prev);
        const categorySelections = newMap.get(categoryName) || new Set();
        const newCategorySelections = new Set(categorySelections);

        if (newCategorySelections.has(variableName)) {
          newCategorySelections.delete(variableName);
        } else {
          newCategorySelections.add(variableName);
        }

        newMap.set(categoryName, newCategorySelections);
        return newMap;
      });
    },
    []
  );

  // Get count of selected variables for a category
  const getCategorySelectionCount = useCallback(
    (categoryName: string) => {
      const categorySelections = selectedVariablesByCategory.get(categoryName);
      return categorySelections ? categorySelections.size : 0;
    },
    [selectedVariablesByCategory]
  );

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      slotProps={{
        content: {
          sx: {
            boxShadow: "none",
            borderLeft: `1px solid ${Colors.BLACK_30}`,
          },
        },
      }}
      sx={{
        zIndex: 2,
        padding: "1rem",
        backdropFilter: "blur(1px)",
        "--Drawer-horizontalSize": "45%",
      }}
    >
      <Sheet
        sx={{
          p: "2rem",
          gap: "2rem",
          height: "100%",
          display: "flex",
          overflow: "auto",
          borderRadius: "md",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="column" alignItems="flex-start">
            <Typography level="32-semibold">Edit Variables</Typography>
          </Stack>
          <Stack direction="row" gap="0.5rem">
            <IconButton onClick={() => setOpenDrawer(false)}>
              <IoClose fontSize="1.8rem" />
            </IconButton>
          </Stack>
        </Stack>
        <Stack width="100%" direction="row" gap="1rem">
          <Input
            fullWidth
            placeholder="Search"
            startDecorator={<IoIosSearch fontSize="1.2rem" />}
          />
          <Button
            color="neutral"
            variant="outlined"
            startDecorator={<BsStars />}
          >
            Autofill
          </Button>
          <Button
            color="lime"
            variant="outlined"
            startDecorator={<MdRefresh fontSize="1.2rem" />}
          >
            Rerun
          </Button>
        </Stack>
        <Card sx={{ padding: "1.5rem", height: "20rem", overflowY: "auto" }}>
          <Stack overflow="auto" gap="1.5rem">
            {dummyVariableData.map((category, index) => (
              <Box key={index}>
                <Stack gap="1rem">
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" alignItems="center" gap="0.5rem">
                      <Typography level="15-medium">
                        {category.categoryName}
                      </Typography>
                      {getCategorySelectionCount(category.categoryName) > 0 && (
                        <Typography level="body-sm" sx={{ color: "lime.500" }}>
                          ({getCategorySelectionCount(category.categoryName)}{" "}
                          selected)
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                  <Stack direction="row" flexWrap="wrap" gap={2} p="1px">
                    {category.variables.map((variable) => {
                      const isSelected = isVariableSelected(
                        category.categoryName,
                        variable.name
                      );
                      return (
                        <Chip
                          variant="plain"
                          key={variable.name}
                          color={isSelected ? "lime" : "neutral"}
                          endDecorator={
                            <Stack ml="0.5rem" direction="row" gap="0.2rem">
                              <BsStars fontSize="0.8rem" />
                              {isSelected ? (
                                <IoCheckmarkOutline />
                              ) : (
                                <IoAddOutline />
                              )}
                            </Stack>
                          }
                        >
                          <Checkbox
                            overlay
                            size="sm"
                            disableIcon
                            variant="outlined"
                            checked={isSelected}
                            label={variable.name}
                            color={isSelected ? "lime" : "neutral"}
                            onChange={() =>
                              toggleVariableSelection(
                                category.categoryName,
                                variable.name
                              )
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
        <AccordionGroup
          disableDivider
          sx={{
            gap: "1rem",
            ".MuiAccordionSummary-root > button:hover": {
              backgroundColor: "transparent !important",
            },
          }}
        >
          {variablesAccordionData.map((item, index) => (
            <Accordion
              key={index}
              variant="outlined"
              sx={{
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                border: `1px solid ${Colors.BLACK_30}`,
              }}
            >
              <AccordionSummary
                color="lime"
                indicator={
                  <IoIosArrowDown
                    style={{
                      borderRadius: "2rem",
                      padding: "0.5rem 0.75rem",
                      border: `1px solid ${Colors.LIME_10}`,
                    }}
                  />
                }
              >
                <Typography level="20-medium" textColor={Colors.LIME_10}>
                  {item.summary}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>{item.details}</AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      </Sheet>
    </Drawer>
  );
};

export default EditVariables;
