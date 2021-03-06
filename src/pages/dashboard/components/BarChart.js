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

export function BarChart(props) {
  const { data, size, title } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div
      style={{
        width: size === "large" ? "60vw" : size === "small" ? "25vw" : "45vw",
        padding: "20px",
      }}
    >
      {data ? <Bar options={options} data={data} /> : null}
    </div>
  );
}
