import { EDimensionality } from "@/type/summary";
import { TTransaction } from "@/type/transaction";
import { getDataByDate } from "@/util/analysis";
import ReactEChartsCode from "echarts-for-react";

interface IProps {
  data: TTransaction[];
  dimensionality: EDimensionality;
}

const Line = ({ data, dimensionality }: IProps) => {
  const { label, value } = getDataByDate(data, dimensionality);

  const option = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "#ccc",
      borderWidth: 1,
      textStyle: {
        color: "#333",
      },
      formatter: (params: any) => {
        return `${params[0].name}: ${params[0].value}`;
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: label,
      axisLine: {
        lineStyle: {
          color: "#ddd",
        },
      },
      axisLabel: {
        color: "#666",
        fontSize: 12,
      },
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#eee",
        },
      },
      axisLabel: {
        color: "#666",
        fontSize: 12,
        formatter: (value: number) => {
          return value.toLocaleString();
        },
      },
    },
    series: [
      {
        data: value,
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        itemStyle: {
          color: "#3b82f6",
        },
        lineStyle: {
          width: 3,
          color: "#3b82f6",
          shadowColor: "rgba(59, 130, 246, 0.3)",
          shadowBlur: 10,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(59, 130, 246, 0.5)" },
              { offset: 1, color: "rgba(59, 130, 246, 0.05)" },
            ],
          },
        },
        emphasis: {
          itemStyle: {
            color: "#2563eb",
            borderColor: "#2563eb",
            borderWidth: 2,
            shadowColor: "rgba(37, 99, 235, 0.5)",
            shadowBlur: 10,
          },
        },
        animation: true,
        animationDuration: 1000,
        animationEasing: "elasticOut",
      },
    ],
    responsive: true,
  };

  return (
    <ReactEChartsCode option={option} className="rounded-lg shadow-md p-2" />
  );
};

export default Line;
