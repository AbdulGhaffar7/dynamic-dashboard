import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart(props) {
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
        width: size === "large" ? "35vw" : size === "small" ? "15vw" : "25vw",
        padding: "20px",
      }}
    >
      {data ? <Pie data={data} options={options} /> : null}
    </div>
  );
}
