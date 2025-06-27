import {
  Title,
  Legend,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Stack, Typography, Card, Select, Option } from "@mui/joy";

import { Colors } from "../../../common/colors";
import { graphDummyData } from "../../../common/constants";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graphs = () => {
  const [selectedValue, setSelectedValue] = useState();
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
    plugins: {
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
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: Colors.WHITE,
          callback: (value: number | string) => `$${value}K`,
        },
        grid: {
          color: Colors.BLACK_30,
        },
      },
      x: {
        ticks: { color: Colors.WHITE },
        grid: { display: false },
      },
    },
  };

  const handleChange = (_event: any, newValue: any) => {
    setSelectedValue(newValue);
  };

  const dropdownOptions = [
    { value: "unsatisfied_demand", label: "Unsatisfied Demand %" },
    { value: "average_wait_time", label: "Average Wait Time (mins)" },
    { value: "average_charging_time", label: "Average Charging Time (mins)" },
    { value: "average_charging_cost", label: "Average Charging Cost (€)" },
  ];

  return (
    <Stack flex={4} gap="1rem" minWidth="30rem">
      <Typography level="24-semibold">Graphs</Typography>
      <Card sx={{ bgcolor: Colors.BLACK_40, p: "2rem" }}>
        <Select
          size="sm"
          value={selectedValue}
          onChange={handleChange}
          defaultValue={dropdownOptions[0].value}
          sx={{ width: "15rem", bgcolor: Colors.BLACK_20, alignSelf: "flex-end" }}
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <Stack height="100%" flex={1}>
          <Line data={graphDummyData} options={options} />
        </Stack>
      </Card>
    </Stack>
  );
};

export default Graphs;
