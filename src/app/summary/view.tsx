"use client";

import Operation from "@/components/summary/Operation";
import { useSummaryStore } from "@/store/summary";
import dynamic from "next/dynamic";
import Data from "@/components/summary/Data";
const Line = dynamic(() => import("@/components/summary/Line"), { ssr: false });
const Pie = dynamic(() => import("@/components/summary/Pie"), { ssr: false });
import weekofyear from "dayjs/plugin/dayOfYear";
import dayjs from "dayjs";
dayjs.extend(weekofyear);

const View = () => {
  const { dimensionality, data } = useSummaryStore((store) => store);
  return (
    <div>
      <Operation />
      <Data data={data} />
      <Line data={data} dimensionality={dimensionality} />
      <Pie data={data} />
    </div>
  );
};

export default View;
