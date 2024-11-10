import { EDimensionality, SummaryItem } from "@/type/summary";
import { getLocalTimeZone, parseAbsolute } from "@internationalized/date";

export const getSumByCategory = (data: SummaryItem[]) => {
  const ag = data.reduce((acc, cur) => {
    const { name, amount } = cur;
    if (acc[name]) {
      acc[name] += amount;
    } else {
      acc[name] = amount;
    }
    return acc;
  }, {} as Record<string, number>);

  return Object.keys(ag).map((v) => ({ name: v, value: ag[v] }));
};

export const getDataByDate = (
  data: SummaryItem[],
  dimensionality: EDimensionality
) => {
  const ag = data.reduce((acc, cur) => {
    const { create_time, amount } = cur;
    const d = parseAbsolute(create_time, getLocalTimeZone());
    const year = d.year;
    const month = d.month;
    const date = d.day;
    let s = "";
    switch (dimensionality) {
      case EDimensionality.DAILY:
        s = `${year}-${month}-${date}`;
        break;
      case EDimensionality.MONTHLY:
        s = `${year}-${month}`;
      case EDimensionality.YEARLY:
        s = `${year}`;
      default:
        s = `${year}-${month}-${date}`;
    }

    if (acc[s]) {
      acc[s] += amount;
    } else {
      acc[s] = amount;
    }

    return acc;
  }, {} as Record<string, number>);

  return { label: Object.keys(ag), value: Object.values(ag) };
};
