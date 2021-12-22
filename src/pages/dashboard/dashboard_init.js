const labels = ["2015", "2016", "2017", "2018", "2019", "2020"];

export const app_data = [
  {
    type: "html_content",
    width: "90vw",
    height: "50px",
    order: 1,
    priority: 1,
    data: "<strong>Welcome to Cricket Experts</strong>",
  },

  {
    title: "Pak vs Eng T20 Wins Comparison",
    type: "bar_chart",
    size: "default",
    order: 2,
    priority: 2,
    data: {
      labels,
      datasets: [
        {
          label: "England",
          data: [15, 9, 4, 14, 8, 11],
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
        {
          label: "Pakistan",
          data: [12, 19, 14, 10, 8, 21],
          backgroundColor: "rgba(153, 102, 255, 1)",
        },
      ],
    },
  },

  {
    type: "pie_chart",
    title: "Top 5 favouite crickers in world",
    size: "default",
    order: 3,
    priority: 3,
    data: {
      labels: [
        "Virat Kohli",
        "Kane Williamson",
        "Babar Azam",
        "Jos Buttler",
        "Chris Gayle",
      ],
      datasets: [
        {
          label: "Dataset 1",
          data: [24, 13, 18, 10, 15],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  },

  {
    type: "line_chart",
    size: "default",
    title: "Virat vs Rohit runs comparison",
    order: 4,
    priority: 4,
    data: {
      labels,
      datasets: [
        {
          label: "Virat",
          data: [687, 954, 1450, 890, 365, 245],
          backgroundColor: "rgba(255, 99, 132, 1)",
          borderColor: "rgb(255, 99, 132)",
        },
        {
          label: "Rohit",
          data: [558, 863, 950, 1320, 465, 650],
          backgroundColor: "rgba(153, 102, 255, 1)",
          borderColor: "rgb(53, 162, 235)",
        },
      ],
    },
  },

  {
    type: "data_card",
    height: "60px",
    width: "300px",
    order: 6,
    priority: 5,
    title: "Top Batsman",
    data: "<h4>Babar Azam</h4><h1>Rating: 873</h1>",
  },
  {
    type: "data_card",
    height: "60px",
    width: "300px",
    order: 7,
    priority: 6,
    title: "Top Bowler",
    data: "<h4>Trent Boult</h4><h1>Rating: 737</h1>",
  },
  {
    type: "data_card",
    height: "60px",
    width: "300px",
    order: 8,
    priority: 7,
    title: "Top All-Rounder",
    data: "<h4>Shakib ul Hasan</h4><h1>Rating: 416</h1>",
  },

  {
    type: "data_table",
    size: "large",
    order: 5,
    priority: 8,
    data: {
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Strike rate",
          dataIndex: "strike",
          key: "strike",
        },
        {
          title: "Average",
          dataIndex: "average",
          key: "average",
        },
      ],
      dataset: [
        {
          key: "1",
          name: "Kl Rahul",
          strike: 145,
          average: 40.6,
        },
        {
          key: "2",
          name: "D Warner",
          strike: 167,
          average: 34.8,
        },
        {
          key: "3",
          name: "L Livingstone",
          strike: 180.2,
          average: 26.4,
        },
        {
          key: "4",
          name: "Asif Ali",
          strike: 213,
          average: 20.2,
        },
      ],
    },
  },
];
