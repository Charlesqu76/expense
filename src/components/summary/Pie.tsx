import { TTransaction } from "@/type/transaction";
import { getSumByCategory } from "@/util/analysis";
import ReactEChartsCode from "echarts-for-react";

interface IProps {
  data: TTransaction[];
}

const Pie = ({ data }: IProps) => {
  const colorPalette = [
    ["#6236FF", "#9A7BFF"],
    ["#FFC107", "#FFD54F"],
    ["#FF7043", "#FFAB91"],
    ["#00BCD4", "#4DD0E1"],
    ["#4CAF50", "#81C784"],
    ["#EC407A", "#F48FB1"],
    ["#7E57C2", "#B39DDB"],
  ];

  // Prepare data with gradients
  const categoryData = getSumByCategory(data);
  const seriesData = categoryData.map((item, index) => {
    const colorIndex = index % colorPalette.length;
    return {
      ...item,
      itemStyle: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: colorPalette[colorIndex][0] },
            { offset: 1, color: colorPalette[colorIndex][1] },
          ],
        },
      },
    };
  });

  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: ${c} ({d}%)",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: 8,
      textStyle: {
        color: "#333",
      },
      extraCssText: "box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);",
    },
    legend: {
      orient: "horizontal",
      left: "center",
      top: "0px",
      textStyle: {
        fontSize: 12,
      },
    },
    series: [
      {
        name: "Expenses",
        type: "pie",
        radius: ["40%", "60%"],
        avoidLabelOverlap: true,
        data: seriesData,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "18",
            fontWeight: "bold",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function () {
          return Math.random() * 200;
        },
      },
    ],
  };

  return (
    <div className="rounded-lg shadow-md p-2">
      <ReactEChartsCode option={option} />
    </div>
  );
};

export default Pie;
