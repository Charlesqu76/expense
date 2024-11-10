import { SummaryItem } from "@/type/summary";
import { getSumByCategory } from "@/util/analysis";
import ReactEChartsCode from "echarts-for-react";

interface IProps {
  data: SummaryItem[];
}

const Pie = ({ data }: IProps) => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: getSumByCategory(data),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return <ReactEChartsCode option={option}></ReactEChartsCode>;
};

export default Pie;
