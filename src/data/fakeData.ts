import { DataBarModel } from "../components/Charts/ChartBar";
import { DataLineModel } from "../components/Charts/ChartLine";

export const dataPie: number[] = [25, 40, 15];

export const dataBar: DataBarModel[] = [
  {
    bgColor: "#4A90E2",
    data: [
      { x: "Set 1", y: 25 },
      { x: "Set 2", y: 40 },
      { x: "Set 3", y: 15 },
    ],
  },
  {
    bgColor: "#F5A623",
    data: [
      { x: "Set 1", y: 20 },
      { x: "Set 2", y: 35 },
      { x: "Set 3", y: 50 },
    ],
  },
];

export const dataLine: DataLineModel[] = [
  {
    label: "Line 1",
    bgColor: "#4A90E2",
    data: [
      { x: "0", y: 40 },
      { x: "5", y: 35 },
      { x: "10", y: 50 },
      { x: "15", y: 45 },
      { x: "20", y: 60 },
      { x: "25", y: 55 },
      { x: "30", y: 70 },
      { x: "35", y: 65 },
      { x: "40", y: 80 },
      { x: "45", y: 75 },
      { x: "50", y: 90 },
    ],
  },
  {
    label: "Line 2",
    bgColor: "#F5A623",
    data: [
      { x: "0", y: 20 },
      { x: "5", y: 25 },
      { x: "10", y: 30 },
      { x: "15", y: 35 },
      { x: "20", y: 40 },
      { x: "25", y: 45 },
      { x: "30", y: 50 },
      { x: "35", y: 55 },
      { x: "40", y: 60 },
      { x: "45", y: 65 },
      { x: "50", y: 70 },
    ],
  },
];
