import { getExpense } from "@/fetch/expense";
import ExpenseView from "./View";
import { getCategory } from "@/fetch/category";
import ExpenseProvider from "./Provider";
import { Metadata } from "next";
import { getDaily } from "@/fetch/daily";

export const metadata: Metadata = {
  title: "expense",
};

export default async function Expense() {
  const { data } = await getDaily();

  return (
    <div className="p-2">
      {/* <ExpenseProvider
        categoryList={category || []}
        expenseList={expense || []}
      > */}
      <ExpenseView data={data || []} />
      {/* </ExpenseProvider> */}
    </div>
  );
}
