"use client";
import { ReactElement, useRef } from "react";
import {
  createExpenseStore,
  ExpenseContext,
  ExpenseStore,
} from "../store/expense";
import { TCategory } from "@/type/category";

interface IProps {
  children: ReactElement | ReactElement[];
  expenseList: TTransaction[];
  categoryList: TCategory[];
}

const ExpenseProvider = ({ children, expenseList, categoryList }: IProps) => {
  const ref = useRef<ExpenseStore>();
  if (!ref.current) {
    ref.current = createExpenseStore({ expenseList, categoryList });
  }
  return (
    <ExpenseContext.Provider value={ref.current}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
