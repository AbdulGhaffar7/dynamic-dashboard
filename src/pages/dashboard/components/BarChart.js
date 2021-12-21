import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export function BarChart(props) {
  const { data, size } = props;

  return (
    <div
      style={{
        width: size === "large" ? "60vw" : size === "small" ? "25vw" : "40vw",
      }}
    >
      {data ? <Bar options={options} data={data} /> : null}
    </div>
  );
}
