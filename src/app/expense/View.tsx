"use client";

import ListItem from "@/components/transaction/ListItem";
import { TCategory } from "@/type/category";
import { useExpenseStore } from "../../store/expense";
import dynamic from "next/dynamic";
import { Button } from "antd";
// import Detail from "@/components/transaction/Detail";
const Detail = dynamic(() => import("@/components/transaction/Detail"), {
  ssr: false,
});

const ExpenseView = () => {
  const { categoryList, expenseList, clickAdd, clickEdit } = useExpenseStore(
    (store) => store
  );
  const categoryMap = categoryList.reduce((acc, cur) => {
    acc[cur["id"]] = cur;
    return acc;
  }, {} as Record<number, TCategory>);

  return (
    <>
      <Button className="mb-2" onClick={clickAdd} type="primary">
        Add Expense
      </Button>
      <div className="space-y-2">
        {expenseList.map((v) => (
          <ListItem
            key={v.id}
            data={v}
            categoryMap={categoryMap}
            clickEdit={clickEdit}
          />
        ))}
      </div>
      <Detail />
    </>
  );
};

export default ExpenseView;
