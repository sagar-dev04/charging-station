import { extendTheme } from "@mui/joy/styles";

import { Colors } from "./colors";

// Extend Joy UI theme types to include lime color
declare module "@mui/joy/styles" {
  interface TypographySystemOverrides {
    "32-regular": true;
    "32-semibold": true;
    "32-medium": true;
    "24-semibold": true;
    "24-regular": true;
    "24-medium": true;
    "15-regular": true;
    "15-semibold": true;
    "15-medium": true;
    "20-regular": true;
    "20-semibold": true;
    "20-medium": true;
    "16-regular": true;
    "16-semibold": true;
    "16-medium": true;
    "12-regular": true;
    "12-semibold": true;
    "12-medium": true;
    "18-regular": true;
    "18-semibold": true;
    "18-medium": true;
  }

  interface ColorPalettePropOverrides {
    lime: true;
  }

  interface Palette {
    lime: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      solidBg: string;
      solidColor: string;
      solidHoverBg: string;
      solidActiveBg: string;
      outlinedBorder: string;
      outlinedColor: string;
      outlinedHoverBg: string;
      outlinedActiveBg: string;
      softBg: string;
      softColor: string;
      softHoverBg: string;
      softActiveBg: string;
      plainColor: string;
      plainHoverBg: string;
      plainActiveBg: string;
    };
  }
}

// Custom theme configuration for Joy UI
export const customTheme = extendTheme({
  // Custom theme configuration for Joy UI, including color schemes and component overrides
  colorSchemes: {
    // Define color schemes for light and dark modes
    light: {
      palette: {
        neutral: {
          outlinedBorder: Colors.BLACK_30,
          outlinedBg: Colors.BLACK_40,
        },
        lime: {
          // Custom lime color palette for the application
          50: Colors.LIME_50,
          100: Colors.LIME_100,
          200: Colors.LIME_200,
          300: Colors.LIME_300,
          400: Colors.LIME_400,
          500: Colors.LIME_500,
          solidBg: Colors.LIME_500,
          solidColor: Colors.BLACK_10,
          solidHoverBg: Colors.LIME_600,
          solidActiveBg: Colors.LIME_700,
          // Your exact reference requirements for outlined
          outlinedBorder: Colors.LIME_10, // Your reference border color
          outlinedColor: Colors.LIME_500, // Your reference text color
          outlinedHoverBg: Colors.LIME_HOVER, // Subtle lime for hover
          outlinedActiveBg: Colors.LIME_ACTIVE, // Subtle lime for active
          softBg: Colors.LIME_50,
          softColor: Colors.LIME_700,
          softHoverBg: Colors.LIME_HOVER, // Subtle lime for hover
          softActiveBg: Colors.LIME_ACTIVE, // Subtle lime for active
          plainColor: Colors.LIME_600,
          plainHoverBg: Colors.LIME_HOVER, // Subtle lime for hover
          plainActiveBg: Colors.LIME_ACTIVE, // Subtle lime for active
        },
      },
    },
  },
  components: {
    // Component-specific style overrides
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
              borderColor: Colors.BLACK_30,
              backgroundColor: Colors.BLACK_40,
            }),
        }),
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
              borderColor: Colors.BLACK_30,
              backgroundColor: Colors.BLACK_40,
            }),
        }),
      },
    },
    JoyCard: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
              borderColor: Colors.BLACK_30,
              backgroundColor: Colors.BLACK_20,
            }),
        }),
      },
    },
    JoyChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "lime" &&
            ownerState.variant === "outlined" && {
              backgroundColor: Colors.LIME_HOVER,
            }),
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
              borderColor: Colors.BLACK_30,
              backgroundColor: Colors.BLACK_20,
              "&:focus-within": {
                "--Input-focusedThickness": "1px",
                "--Input-focusedHighlight": Colors.LIME_10,
              },
            }),
        }),
      },
    },
    JoyTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "outlined" && {
            "&.Mui-selected": {
              borderColor: Colors.BLACK_30,
              backgroundColor: Colors.BLACK_40,
            },
          }),
        }),
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          color: Colors.WHITE,
        },
      },
    },
  },
  typography: {
    // Custom typography styles for various text sizes and weights
    "32-semibold": {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      fontWeight: 600,
    },
    "32-medium": {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      fontWeight: 500,
    },
    "32-regular": {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      fontWeight: "normal",
    },
    "24-semibold": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: 600,
    },
    "24-medium": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: 500,
    },
    "24-regular": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: "normal",
    },
    "20-semibold": {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 600,
    },
    "20-medium": {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 500,
    },
    "20-regular": {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: "normal",
    },
    "18-semibold": {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      fontWeight: 600,
    },
    "18-medium": {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      fontWeight: 500,
    },
    "18-regular": {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      fontWeight: "normal",
    },
    "16-semibold": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 600,
    },
    "16-medium": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 500,
    },
    "16-regular": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: "normal",
    },
    "15-semibold": {
      fontSize: "0.9375rem",
      lineHeight: "1.375rem",
      fontWeight: 600,
    },
    "15-medium": {
      fontSize: "0.9375rem",
      lineHeight: "1.375rem",
      fontWeight: 500,
    },
    "15-regular": {
      fontSize: "0.9375rem",
      lineHeight: "1.375rem",
      fontWeight: "normal",
    },
    "12-semibold": {
      fontSize: "0.75rem",
      lineHeight: "1rem",
      fontWeight: 600,
    },
    "12-medium": {
      fontSize: "0.75rem",
      lineHeight: "1rem",
      fontWeight: 500,
    },
    "12-regular": {
      fontSize: "0.75rem",
      lineHeight: "1rem",
      fontWeight: "normal",
    },
  },
});
