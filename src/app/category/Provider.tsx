"use client";
import { ReactElement, useRef } from "react";
import {
  createCategoryStore,
  CategoryContext,
  CategoryStore,
} from "../store/category";
import { TCategory } from "@/type/category";

interface IProps {
  children: ReactElement | ReactElement[];
  categoryList: TCategory[];
}

const Provider = ({ children, categoryList }: IProps) => {
  const ref = useRef<CategoryStore>();
  if (!ref.current) {
    ref.current = createCategoryStore({ categoryList });
  }
  return (
    <CategoryContext.Provider value={ref.current}>
      {children}
    </CategoryContext.Provider>
  );
};

export default Provider;
