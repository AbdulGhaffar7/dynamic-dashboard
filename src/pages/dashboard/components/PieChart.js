import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Pie Chart",
    },
  },
};

export function PieChart(props) {
  const { data, size } = props;

  return (
    <div
      style={{
        width: size === "large" ? "35vw" : size === "small" ? "15vw" : "25vw",
      }}
    >
      {data ? <Pie data={data} options={options} /> : null}
    </div>
  );
}
