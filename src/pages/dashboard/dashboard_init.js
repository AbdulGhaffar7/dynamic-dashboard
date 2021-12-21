const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const app_data = [
  {
    type: "bar_chart",
    size: "small",
    order: 1,
    priority: 2,
    data: {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: [87, 354, 450, 290, 80, 365, 245],
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
        {
          label: "Dataset 1",
          data: [158, 263, 150, 222, 180, 165, 295],
          backgroundColor: "rgba(153, 102, 255, 1)",
        },
      ],
    },
  },

  {
    type: "pie_chart",
    size: "default",
    order: 2,
    priority: 1,
    data: {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: [87, 354, 450, 290, 80, 365, 245],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(0, 255, 255, 0.7)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(0, 255, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  },
];
