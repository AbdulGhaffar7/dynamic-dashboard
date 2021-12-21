import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { BarChart } from "./components/BarChart";
import { PieChart } from "./components/PieChart";
import { app_data } from "./dashboard_init";

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
        height: "80vh",
        overflowY: "scroll",
      }}
    >
      {data?.map((item) => {
        return item?.type === "bar_chart" ? (
          <BarChart data={datasets[item?.order - 1]} size={item?.size} />
        ) : item?.type === "pie_chart" ? (
          <PieChart data={datasets[item?.order - 1]} size={item?.size} />
        ) : null;
      })}
    </Row>
  );
};

export default Dashboard;
