"use client";

import ListItem from "@/components/transaction/ListItem";
import { TCategory } from "@/type/category";
import { useExpenseStore } from "../../store/expense";
import dynamic from "next/dynamic";
import { Button } from "antd";
const Detail = dynamic(() => import("@/components/transaction/Detail"), {
  ssr: false,
});

const ExpenseView = () => {
  const { categoryList, expenseList, clickAdd, clickEdit } = useExpenseStore(
    (store) => store
  );
  return (
    <>
      <Button className="mb-2" onClick={clickAdd} type="primary">
        Add Expense
      </Button>
      <div className="space-y-2">
        {expenseList.map((v) => (
          <ListItem key={v.id} data={v} clickEdit={clickEdit} />
        ))}
      </div>
      <Detail />
    </>
  );
};

export default ExpenseView;
