import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { BarChart } from "./components/BarChart";
import { PieChart } from "./components/PieChart";
import { LineChart } from "./components/LineChart";
import { app_data } from "./dashboard_init";
import { SimpleHTML } from "./components/SimpleHTML";
import { DataCard } from "./components/DataCard";
import { DataTable } from "./components/DataTable";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [datasets, setDatasets] = useState(new Array(app_data?.length));

  useEffect(() => {
    const order_Array = [...app_data].sort(function (a, b) {
      if (a.order < b.order) return -1;
      if (a.order > b.order) return 1;
      return 0;
    });
    setData([...order_Array]);

    const priority_Array = [...app_data].sort(function (a, b) {
      if (a.priority < b.priority) return 1;
      if (a.priority > b.priority) return -1;
      return 0;
    });
    var tempdata = datasets;

    while (priority_Array?.length > 0) {
      var a = priority_Array.pop();
      tempdata[a.order - 1] = a.data;
      setDatasets(tempdata);
    }
  }, []);

  return (
    <Row
      style={{
        maxHeight: "80vh",
        overflow: "scroll",
      }}
    >
      {data?.map((item) => {
        return item?.type === "bar_chart" ? (
          <BarChart
            data={datasets[item?.order - 1]}
            size={item?.size}
            title={item?.title}
          />
        ) : item?.type === "pie_chart" ? (
          <PieChart
            data={datasets[item?.order - 1]}
            size={item?.size}
            title={item?.title}
          />
        ) : item?.type === "line_chart" ? (
          <LineChart
            data={datasets[item?.order - 1]}
            size={item?.size}
            title={item?.title}
          />
        ) : item?.type === "html_content" ? (
          <SimpleHTML
            data={datasets[item?.order - 1]}
            width={item?.width}
            height={item?.height}
          />
        ) : item?.type === "data_card" ? (
          <DataCard
            data={datasets[item?.order - 1]}
            height={item?.height}
            width={item?.width}
            title={item?.title}
          />
        ) : item?.type === "data_table" ? (
          <DataTable data={datasets[item?.order - 1]} size={item?.size} />
        ) : null;
      })}
    </Row>
  );
};

export default Dashboard;
