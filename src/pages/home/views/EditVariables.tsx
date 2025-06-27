import { Drawer, Sheet } from "@mui/joy";
import { useState, useCallback, useRef } from "react";

import {
  dummyVariableData,
  variablesAccordionData,
} from "../../../common/constants";
import HeaderSection from "./HeaderSection";
import VariablesCard from "./VariablesCard";
import { Colors } from "../../../common/colors";
import DescriptionCard from "./DescriptionCard";
import SearchAndActionBar from "./SearchAndActionBar";
import VariablesAccordion from "./VariablesAccordion";

const EditVariables = ({ openDrawer, setOpenDrawer }) => {
  // Component for managing and editing variables in a drawer interface
  const [selectedVariablesByCategory, setSelectedVariablesByCategory] =
    // State to track selected variables by category
    useState<Map<string, Set<string>>>(new Map());

  const [hoveredChip, setHoveredChip] = useState<{
    // State to track the currently hovered variable chip
    variableName: string;
    description: string;
  } | null>(null);

  const [showDescription, setShowDescription] = useState(false);
  // State to control the visibility of the description card
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isVariableSelected = useCallback(
    // Function to check if a variable is selected within a category
    (categoryName: string, variableName: string) => {
      const categorySelections = selectedVariablesByCategory.get(categoryName);
      return categorySelections?.has(variableName) ?? false;
    },
    [selectedVariablesByCategory]
  );

  const toggleVariableSelection = useCallback(
    // Function to toggle the selection state of a variable
    (categoryName: string, variableName: string) => {
      setSelectedVariablesByCategory((prev) => {
        const newMap = new Map(prev);
        const currentSet = newMap.get(categoryName) || new Set();
        if (currentSet.has(variableName)) {
          currentSet.delete(variableName);
        } else {
          currentSet.add(variableName);
        }
        newMap.set(categoryName, new Set(currentSet));
        return newMap;
      });
    },
    []
  );

  const getCategorySelectionCount = useCallback(
    // Function to get the count of selected variables in a category
    (categoryName: string) =>
      selectedVariablesByCategory.get(categoryName)?.size ?? 0,
    [selectedVariablesByCategory]
  );

  return (
    <Drawer
      // Drawer component for displaying the variable editing interface
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
        // Container for the content inside the drawer
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
        <HeaderSection onClose={() => setOpenDrawer(false)} />
        {/* Header section with a close button */}
        <SearchAndActionBar />
        <div>
          <VariablesCard
            // Component to display and manage variable chips
            data={dummyVariableData}
            isSelected={isVariableSelected}
            toggleSelection={toggleVariableSelection}
            getSelectionCount={getCategorySelectionCount}
            onHoverStart={(chip) => {
              hoverTimer.current = setTimeout(() => {
                setHoveredChip(chip);
                setShowDescription(true);
              }, 1500);
            }}
            onHoverEnd={() => {
              if (hoverTimer.current) clearTimeout(hoverTimer.current);
              setShowDescription(false);
            }}
            showDescription={showDescription}
          />
          {/* Component to display the description of the hovered variable */}
          {showDescription && hoveredChip && (
            <DescriptionCard chip={hoveredChip} />
          )}
        </div>
        <VariablesAccordion data={variablesAccordionData} />
        {/* Accordion component to display variable categories */}
      </Sheet>
    </Drawer>
  );
};

export default EditVariables;
// Export the EditVariables component for use in the home page
