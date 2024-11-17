"use client";

import Operation from "@/components/summary/Operation";
import { useSummaryStore } from "@/store/summary";
import ListItem from "@/components/transaction/ListItem";
import dynamic from "next/dynamic";
const Line = dynamic(() => import("@/components/summary/Line"), { ssr: false });
const Pie = dynamic(() => import("@/components/summary/Pie"), { ssr: false });

const View = () => {
  const { dimensionality, data } = useSummaryStore((store) => store);
  return (
    <div>
      <Operation />
      <div className="space-y-2">
        {data.map((v) => (
          <ListItem key={v["id"]} data={v} />
        ))}
      </div>
      <Line data={data} dimensionality={dimensionality} />
      <Pie data={data} />
    </div>
  );
};

export default View;
