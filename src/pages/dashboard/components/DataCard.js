import { Card } from "antd";
import React from "react";
import { SimpleHTML } from "./SimpleHTML";

export function DataCard(props) {
  const { data, width, height, title } = props;
  return (
    <div
      style={{
        margin: "20px 20px 20px 0",
        background: "#ececec",
        width: width,
        height: height,
      }}
    >
      {data ? (
        <Card
          title={title ? title : "Title"}
          bordered={false}
          style={{ width: "100%", borderRadius: "10px" }}
        >
          <SimpleHTML data={data} />
        </Card>
      ) : null}
    </div>
  );
}
