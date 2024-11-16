"use client";

import Line from "@/components/summary/Line";
import Pie from "@/components/summary/Pie";
import S from "@/components/summary/S";
import { useSummaryStore } from "@/store/summary";
import { SummaryItem } from "@/type/summary";
import { getDataByDate } from "@/util/analysis";

interface IProps {
  data: SummaryItem[];
}

const View = ({ data }: IProps) => {
  console.log(data);

  const { dimensionality } = useSummaryStore((store) => store);
  const { label, value } = getDataByDate(data, dimensionality);
  return (
    <div>
      <S />
      <Line label={label} value={value} />
      <Pie data={data} />
    </div>
  );
};

export default View;
