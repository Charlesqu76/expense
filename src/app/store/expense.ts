import { useStore } from "zustand";
import { createContext, useContext } from "react";
import { createStore } from "zustand/vanilla";
import { TCategory } from "@/type/category";
import { getExpense } from "@/fetch/expense";
import { Status } from "@/type";

interface ExpenseProps {
  open: boolean;
  type: Status;
  categoryList: TCategory[];
  expenseList: TTransaction[];
  data: Partial<TTransaction>;
}

export interface ExpenseState extends ExpenseProps {
  setOpen: (open: boolean) => void;
  setType: (payload: Status) => void;
  setData: (payload: Partial<TTransaction>) => void;
  clickAdd: () => void;
  clickEdit: (payload: TTransaction) => void;
  getExpenses: () => void;
}

export type ExpenseStore = ReturnType<typeof createExpenseStore>;

export const createExpenseStore = (initProps?: Partial<ExpenseProps>) => {
  const DEFAULT_PROPS: ExpenseProps = {
    open: false,
    type: "ADD",
    categoryList: [],
    expenseList: [],
    data: {},
  };
  return createStore<ExpenseState>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setOpen: (payload: boolean) => {
      set({ open: payload });
    },
    setType: (payload: Status) => {
      set({ type: payload });
    },
    setData: (payload: Partial<TTransaction>) => {
      set({ data: payload });
    },
    getExpenses: async () => {
      const { data } = await getExpense();
      set({ expenseList: data });
    },
    clickAdd: () => {
      set({
        data: {
          amount: 0,
          description: "",
          category_id: get().categoryList[0]?.id,
        },
        type: "ADD",
        open: true,
      });
    },
    clickEdit: (payload: TTransaction) => {
      set({ data: payload, type: "EDIT", open: true });
    },
  }));
};

export const ExpenseContext = createContext<ExpenseStore | null>(null);

export const useExpenseStore = <T>(selector: (store: ExpenseState) => T): T => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("error");
  }
  return useStore(context, selector);
};
