"use client";

import ListItem from "@/components/transaction/ListItem";
import { useExpenseStore } from "../../store/expense";
import dynamic from "next/dynamic";
import { Button } from "antd";
const Detail = dynamic(() => import("@/components/transaction/Detail"), {
  ssr: false,
});

const ExpenseView = () => {
  const { expenseList, clickAdd, clickEdit } = useExpenseStore(
    (store) => store
  );
  return (
    <>
      <Button className="mb-4" onClick={clickAdd} type="primary">
        Add Expense
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenseList.map((v) => (
          <ListItem key={v.id} data={v} clickEdit={clickEdit} />
        ))}
      </div>
      <Detail />
    </>
  );
};

export default ExpenseView;
