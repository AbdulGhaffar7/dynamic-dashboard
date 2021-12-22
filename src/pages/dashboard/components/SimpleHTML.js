import Parser from "html-react-parser";
import React from "react";

export function SimpleHTML(props) {
  const { data, width, height } = props;
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
    >
      {data ? Parser(data) : null}
    </div>
  );
}
