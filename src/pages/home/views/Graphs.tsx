import {
  Title, // Enables chart titles
  Legend, // Handles chart legends
  Tooltip, // Provides tooltips for data points
  LinearScale, // Defines linear scaling for axes
  LineElement, // Renders line elements in the chart
  PointElement, // Renders points on the chart
  CategoryScale, // Handles category-based scaling for axes
  Chart as ChartJS, // Main Chart.js object
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2"; // React wrapper for Chart.js
import { Stack, Typography, Card, Select, Option } from "@mui/joy";

import { Colors } from "../../../common/colors"; // Centralized color definitions
import { graphDummyData } from "../../../common/constants"; // Placeholder data for the graph

// Register Chart.js components
ChartJS.register(
  // Register necessary Chart.js components
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graphs = () => {
  // Main component for rendering graphs
  const [selectedValue, setSelectedValue] = useState(); // State for dropdown selection
  const options = {
    // Configuration options for the graph
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      // Interaction settings for tooltips and hover
      intersect: false,
      mode: "index" as const,
    },
    plugins: {
      // Plugin configurations for tooltips and legends
      tooltip: {
        enabled: true,
        callbacks: {
          title: (tooltipItem) => {
            const value = tooltipItem[0].raw as number;
            return `$${value}K`;
          },
          footer: () => {
            return `4.6% above target`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      // Axis configurations
      y: {
        // Y-axis configuration
        beginAtZero: true,
        max: 100,
        ticks: {
          color: Colors.WHITE,
          callback: (value: number | string) => `$${value}K`,
          stepSize: 20, // Ensures only 5 points on the y-axis (0, 20, 40, 60, 80, 100)
        },
        grid: {
          color: Colors.BLACK_30,
        },
      },
      x: {
        // X-axis configuration
        ticks: { color: Colors.WHITE },
        grid: { display: false },
      },
    },
  };

  const handleChange = (_, newValue) => {
    // Handles dropdown value changes
    setSelectedValue(newValue);
  };

  const dropdownOptions = [
    // Options for the dropdown menu
    { value: "unsatisfied_demand", label: "Unsatisfied Demand %" },
    { value: "average_wait_time", label: "Average Wait Time (mins)" },
    { value: "average_charging_time", label: "Average Charging Time (mins)" },
    { value: "average_charging_cost", label: "Average Charging Cost (€)" },
  ];

  return (
    // Render the graph and dropdown components
    <Stack flex={4} gap="1rem" minWidth="30rem">
      {" "}
      {/* Main container for the graph */}
      <Typography level="24-semibold">Graphs</Typography>{" "}
      {/* Title for the graph section */}
      <Card sx={{ bgcolor: Colors.BLACK_40, p: "2rem" }}>
        {" "}
        {/* Card container for the graph */}
        <Select // Dropdown for selecting graph options
          size="sm"
          value={selectedValue}
          onChange={handleChange}
          defaultValue={dropdownOptions[0].value}
          sx={{
            width: "15rem",
            bgcolor: Colors.BLACK_20,
            alignSelf: "flex-end",
          }}
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <Stack height="100%" flex={1}>
          {" "}
          {/* Container for the graph */}
          <Line data={graphDummyData} options={options} />{" "}
          {/* Line chart component */}
        </Stack>
      </Card>
    </Stack>
  );
};

export default Graphs; // Export the Graphs component
