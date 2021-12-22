import { Table } from "antd";
import React from "react";

export function DataTable(props) {
  const { data, size } = props;
  return (
    <div
      style={{
        margin: "30px",
        padding: "20px",
      }}
    >
      {data ? (
        <Table
          columns={data?.columns}
          dataSource={data?.dataset}
          size={size}
          pagination={false}
        />
      ) : null}
    </div>
  );
}
