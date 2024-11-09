"use client";

import ListItem from "@/components/transaction/ListItem";
import Detail from "@/components/transaction/Detail";
import { TCategory } from "@/type/category";
import { Button } from "@nextui-org/react";
import { useExpenseStore } from "../store/expense";

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
      <Button className="mb-2" onClick={clickAdd}>
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
