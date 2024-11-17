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
