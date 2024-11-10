import { SummaryItem } from "@/type/summary";
import { myFetch } from "@/util/fetch";

export const getSummary = () => {
  return myFetch.get<SummaryItem[]>("summary");
};
