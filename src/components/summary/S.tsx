import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import MyCalendar from "./Calendar";
import { EDimensionality } from "@/type/summary";
import { today, getLocalTimeZone } from "@internationalized/date";

export const dimensionalityList = [
  EDimensionality.DAILY,
  EDimensionality.WEEKLY,
  EDimensionality.MONTHLY,
  EDimensionality.YEARLY,
];

const S = () => {
  const [dimensionality, setDimensionality] = useState(EDimensionality.DAILY);
  const timeZone = getLocalTimeZone();
  let defaultDate = today(timeZone);
  const [start, setStart] = useState(defaultDate);
  const [end, setEnd] = useState(defaultDate);

  return (
    <div className="">
      <Select
        label="Dimensionality"
        value={dimensionality}
        onChange={(e) => setDimensionality(e.target.value as any)}
        defaultSelectedKeys={[EDimensionality.MONTHLY]}
      >
        {dimensionalityList.map((v) => (
          <SelectItem key={v}>{v}</SelectItem>
        ))}
      </Select>
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
  );
};

export default S;
