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
  const [selectedVariablesByCategory, setSelectedVariablesByCategory] =
    useState<Map<string, Set<string>>>(new Map());

  const [hoveredChip, setHoveredChip] = useState<{
    variableName: string;
    description: string;
  } | null>(null);

  const [showDescription, setShowDescription] = useState(false);
  const hoverTimer = useRef<any>(null);

  const isVariableSelected = useCallback(
    (categoryName: string, variableName: string) => {
      const categorySelections = selectedVariablesByCategory.get(categoryName);
      return categorySelections?.has(variableName) ?? false;
    },
    [selectedVariablesByCategory]
  );

  const toggleVariableSelection = useCallback(
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
    (categoryName: string) =>
      selectedVariablesByCategory.get(categoryName)?.size ?? 0,
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
        <HeaderSection onClose={() => setOpenDrawer(false)} />
        <SearchAndActionBar />
        <div>
          <VariablesCard
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
          {showDescription && hoveredChip && (
            <DescriptionCard chip={hoveredChip} />
          )}
        </div>
        <VariablesAccordion data={variablesAccordionData} />
      </Sheet>
    </Drawer>
  );
};

export default EditVariables;
