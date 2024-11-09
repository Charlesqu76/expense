import { getExpense } from "@/fetch/expense";
import ExpenseView from "./View";
import { getCategory } from "@/fetch/category";
import ExpenseProvider from "./Provider";

export default async function Expense() {
  const [{ data: expense }, { data: category }] = await Promise.all([
    getExpense(),
    getCategory(),
  ]);
  return (
    <div className="px-2">
      <ExpenseProvider categoryList={category} expenseList={expense}>
        <ExpenseView />
      </ExpenseProvider>
    </div>
  );
}
