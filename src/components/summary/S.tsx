import MyCalendar from "./Calendar";
import { EDimensionality } from "@/type/summary";
import { Select } from "antd";
import { useSummaryStore } from "@/store/summary";

export const dimensionalityList = [
  EDimensionality.DAILY,
  EDimensionality.WEEKLY,
  EDimensionality.MONTHLY,
  EDimensionality.YEARLY,
];

const S = () => {
  const { start, end, setEnd, setStart, dimensionality, setDimensionlity } =
    useSummaryStore((store) => store);

  return (
    <div className="p-4">
      <div className="flex mb-2 space-x-2">
        <MyCalendar
          dimensionality={dimensionality}
          value={start}
          setValue={setStart}
        />
        <MyCalendar
          dimensionality={dimensionality}
          value={end}
          setValue={setEnd}
        />
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

export default S;
