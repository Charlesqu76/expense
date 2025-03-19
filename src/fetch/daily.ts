import { TDaily } from "@/type/transaction";
import { myFetch } from "@/util/fetch";

export const getDaily = () => {
  return myFetch.get<TDaily[]>("daily");
};

export const link = (id: number) => {
  return myFetch.post("daily", { id });
};

export const unlink = (id: number) => {
  return myFetch.delete("daily", { id });
};
