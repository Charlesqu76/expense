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
      <div className="grid sm:grid-cols-2 gap-4">
        <Data data={data} />
        <div>
          <Line data={data} dimensionality={dimensionality} />
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default View;
