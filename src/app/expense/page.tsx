import { getExpense } from "@/fetch/expense";
import ExpenseView from "./View";
import { getCategory } from "@/fetch/category";
import ExpenseProvider from "./Provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "expense",
};

export default async function Expense() {
  const [{ data: expense }, { data: category }] = await Promise.all([
    getExpense(),
    getCategory(),
  ]);
  return (
    <div className="p-2">
      <ExpenseProvider
        categoryList={category || []}
        expenseList={expense || []}
      >
        <ExpenseView />
      </ExpenseProvider>
    </div>
  );
}
