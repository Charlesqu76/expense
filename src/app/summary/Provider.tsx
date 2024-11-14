"use client";
import { ReactElement, useRef } from "react";
import { TCategory } from "@/type/category";
import {
  createSummaryStore,
  SummaryContext,
  Summarystore,
} from "@/store/summary";

interface IProps {
  children: ReactElement | ReactElement[];
}

const SummaryProvider = ({ children }: IProps) => {
  const ref = useRef<Summarystore>();
  if (!ref.current) {
    ref.current = createSummaryStore({});
  }
  return (
    <SummaryContext.Provider value={ref.current}>
      {children}
    </SummaryContext.Provider>
  );
};

export default SummaryProvider;
