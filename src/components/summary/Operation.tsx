"use client";

import MyCalendar from "./Calendar";
import { EDimensionality } from "@/type/summary";
import { Button, Select } from "antd";
import { useSummaryStore } from "@/store/summary";

export const dimensionalityList = [
  EDimensionality.DAILY,
  EDimensionality.WEEKLY,
  EDimensionality.MONTHLY,
  EDimensionality.YEARLY,
];

const Operation = () => {
  const {
    start,
    end,
    setEnd,
    setStart,
    dimensionality,
    setDimensionlity,
    queryData,
  } = useSummaryStore((store) => store);

  return (
    <div className="py-2">
      <div className="flex mb-2 space-x-2">
        <MyCalendar
          dimensionality={dimensionality}
          value={start}
          setValue={setStart}
          disabled={(current) => current > end}
        />
        <MyCalendar
          dimensionality={dimensionality}
          value={end}
          setValue={setEnd}
          disabled={(current) => current < start}
        />
        <Button onClick={queryData} type="primary">
          Search
        </Button>
      </div>
      <Select
        value={dimensionality}
        className="min-w-32"
        onChange={setDimensionlity}
        defaultValue={EDimensionality.MONTHLY}
        options={dimensionalityList.map((v) => ({ value: v, label: v }))}
      />
    </div>
  );
};

export default Operation;
