import ReactEChartsCode from "echarts-for-react";

const Line = ({ label, value }) => {
  const option = {
    xAxis: {
      type: "category",
      data: label,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: value,
        type: "line",
      },
    ],
  };
  return <ReactEChartsCode option={option} />;
};

export default Line;
