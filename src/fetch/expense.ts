import { myFetch } from "@/util/fetch";

export const getExpense = () => {
  return myFetch.get<TTransaction[]>("expense");
};

export const addExpense = (props: AddExpense) => {
  return myFetch.post("expense", props);
};

export const editExpense = (props: TTransaction) => {
  return myFetch.put("expense", props);
};
