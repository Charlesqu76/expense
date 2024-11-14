import { EDimensionality, SummaryItem } from "@/type/summary";
import weekofyear from "dayjs/plugin/dayOfYear";
import dayjs, { Dayjs } from "dayjs";
dayjs.extend(weekofyear);

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

export const getDayFormat = (
  date: Dayjs,
  dimensionality: EDimensionality
): string => {
  const d = dayjs(date);
  const year = d.year();
  const month = d.month();
  const day = d.day();
  // @ts-ignore
  const week = d.week();
  let s = `${year}-${month}-${day}`;
  switch (dimensionality) {
    case EDimensionality.DAILY:
      s = `${year}-${month}-${day}`;
      break;
    case EDimensionality.WEEKLY:
      s = `${year}-${week}th`;
      break;
    case EDimensionality.MONTHLY:
      s = `${year}-${month}`;
      break;
    case EDimensionality.YEARLY:
      s = `${year}`;
      break;
    default:
  }
  return s;
};

export const getDataByDate = (
  data: SummaryItem[],
  dimensionality: EDimensionality
) => {
  const ag = data.reduce((acc, cur) => {
    const { create_time, amount } = cur;
    // @ts-ignore
    const format = getDayFormat(dayjs(create_time), dimensionality);
    if (acc[format]) {
      acc[format] += amount;
    } else {
      acc[format] = amount;
    }
    return acc;
  }, {} as Record<string, number>);

  return { label: Object.keys(ag), value: Object.values(ag) };
};
