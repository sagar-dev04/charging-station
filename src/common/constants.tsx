import { IoMdHome } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { GrDocumentTime } from "react-icons/gr";
import { MdCloudUpload } from "react-icons/md";

interface Variable {
  name: string;
  description: string;
}

interface VariableCategory {
  categoryName: string;
  variables: Variable[];
}

export const dummyVariableData: VariableCategory[] = [
  {
    categoryName: "Variable Category 1",
    variables: [
      {
        name: "Carbon 1",
        description:
          "Carbon footprint measurement system that tracks and analyzes emissions across various operational activities. This comprehensive tool provides real-time insights into environmental impact and helps organizations make data-driven decisions for sustainability.",
      },
      {
        name: "Co2 Distribution",
        description:
          "But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.",
      },
      {
        name: "Fleet Sizing",
        description:
          "Advanced fleet optimization algorithm that determines optimal vehicle quantities based on demand patterns, operational efficiency, and cost considerations. This system ensures maximum utilization while minimizing operational overhead and maintenance costs.",
      },
    ],
  },
  {
    categoryName: "Variable Category 2",
    variables: [
      {
        name: "Parking Rate",
        description:
          "Dynamic pricing model for parking spaces that adjusts rates based on demand, location, and time of day. This intelligent system maximizes revenue while ensuring optimal space utilization and customer satisfaction across different zones.",
      },
      {
        name: "Border Rate",
        description:
          "Cross-border transaction fee calculator that determines optimal pricing for international operations. This system considers currency fluctuations, regulatory requirements, and operational costs to provide competitive yet profitable rate structures.",
      },
      {
        name: "Request Rate",
        description:
          "Real-time monitoring system for service request frequency and response times. This tool analyzes patterns in customer demand and helps optimize resource allocation to ensure consistent service quality and customer satisfaction.",
      },
    ],
  },
  {
    categoryName: "Variable Category 3",
    variables: [
      {
        name: "Energy Consumption",
        description:
          "Comprehensive energy usage tracking system that monitors power consumption across all operational units. This tool provides insights into energy efficiency patterns and helps identify opportunities for cost reduction and environmental impact minimization.",
      },
      {
        name: "Peak Load Analysis",
        description:
          "Advanced analytics tool that identifies and analyzes peak usage periods to optimize resource allocation. This system helps predict high-demand scenarios and ensures adequate capacity planning for uninterrupted service delivery.",
      },
      {
        name: "Efficiency Rating",
        description:
          "Performance measurement metric that evaluates overall system efficiency based on multiple operational parameters. This comprehensive rating system provides benchmarks for continuous improvement and operational excellence.",
      },
    ],
  },
  {
    categoryName: "Variable Category 4",
    variables: [
      {
        name: "User Engagement Score",
        description:
          "Comprehensive metric that measures user interaction levels and platform engagement across different touchpoints. This scoring system helps understand user behavior patterns and drives product development decisions for enhanced user experience.",
      },
      {
        name: "Response Time Metrics",
        description:
          "Real-time performance indicator that tracks system response times across various operations and user interactions. This metric ensures optimal user experience by monitoring and maintaining consistent performance standards.",
      },
      {
        name: "Quality Assurance Index",
        description:
          "Multi-dimensional quality assessment tool that evaluates service delivery standards and operational excellence. This index combines various quality metrics to provide a comprehensive view of system performance and reliability.",
      },
    ],
  },
];

export const variablesAccordionData = [
  {
    summary: "Primary Variables",
    details: "These variables are essential for the core functionality of the system and directly impact its performance and user experience.",
  },
  {
    summary: "Secondary Variables",
    details: "These variables support the primary variables and enhance the overall functionality of the system, providing additional insights and capabilities.",
  },
];

export const homeTabs = [
  {
    label: "Charging Stations",
  },
  {
    label: "Fleet Sizing",
  },
  {
    label: "Parking",
  },
];

export const bestScenarioResults = [
  "The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
  "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
];

export const menuTabs = [
  {
    label: "Home",
    icon: <IoMdHome fontSize="1.4rem" />,
  },
  {
    label: "Notifications",
    icon: <FaBell fontSize="1.4rem" />,
  },
  {
    label: "Pending Requests",
    icon: <GrDocumentTime fontSize="1.4rem" />,
  },
  {
    label: "Upload Data",
    icon: <MdCloudUpload fontSize="1.4rem" />,
  },
  {
    label: "Settings",
    icon: <RiSettings3Fill fontSize="1.4rem" />,
  }
];
