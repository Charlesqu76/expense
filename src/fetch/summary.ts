import { TTransaction } from "@/type/transaction";
import { myFetch } from "@/util/fetch";
import dayjs from "dayjs";

export const getSummary = (payload: { start?: string; end?: string }) => {
  const now = dayjs();
  const start = payload?.start ?? now.startOf("month").toISOString();
  const end = payload?.end ?? now.toISOString();

  return myFetch.get<TTransaction[]>("summary", { start, end });
};
