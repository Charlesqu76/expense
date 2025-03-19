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
    <div className="flex-1 flex flex-col p-4">
      <Operation />
      <div className="flex-1 grid sm:grid-cols-2 gap-4  pb-2">
        <Data data={data} />
        <div className="grid grid-rows-2 gap-4">
          <Line data={data} dimensionality={dimensionality} />
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default View;
