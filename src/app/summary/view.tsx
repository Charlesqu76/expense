"use client";

import Line from "@/components/summary/Line";
import Pie from "@/components/summary/Pie";
import S from "@/components/summary/S";
import { EDimensionality, SummaryItem } from "@/type/summary";
import { getDataByDate } from "@/util/analysis";

interface IProps {
  data: SummaryItem[];
}

const View = ({ data }: IProps) => {
  const { label, value } = getDataByDate(data, EDimensionality.DAILY);
  return (
    <div>
      <S />
      <Line label={label} value={value} />
      <Pie data={data} />
    </div>
  );
};

export default View;
