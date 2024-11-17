"use client";
import { ReactElement, useRef } from "react";
import {
  createSummaryStore,
  SummaryContext,
  Summarystore,
} from "@/store/summary";
import { TTransaction } from "@/type/transaction";

interface IProps {
  data: TTransaction[];
  children: ReactElement | ReactElement[];
}

const SummaryProvider = ({ children, data }: IProps) => {
  const ref = useRef<Summarystore>();
  if (!ref.current) {
    ref.current = createSummaryStore({ data });
  }
  return (
    <SummaryContext.Provider value={ref.current}>
      {children}
    </SummaryContext.Provider>
  );
};

export default SummaryProvider;
