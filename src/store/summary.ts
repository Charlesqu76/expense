import { useStore } from "zustand";
import { createContext, useContext } from "react";
import { createStore } from "zustand/vanilla";
import { EDimensionality } from "@/type/summary";
import dayjs, { Dayjs } from "dayjs";

interface SummaryProps {
  dimensionality: EDimensionality;
  start: Dayjs;
  end: Dayjs;
}

interface SummaryState extends SummaryProps {
  setDimensionlity: (payload: EDimensionality) => void;
  setStart: (payload: Dayjs) => void;
  setEnd: (payload: Dayjs) => void;
}

export type Summarystore = ReturnType<typeof createSummaryStore>;

export const createSummaryStore = (initProps?: Partial<SummaryProps>) => {
  const DEFAULT_PROPS: SummaryProps = {
    start: dayjs(),
    end: dayjs(),
    dimensionality: EDimensionality.DAILY,
  };
  return createStore<SummaryState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setDimensionlity: (payload: EDimensionality) => {
      set({ dimensionality: payload });
    },
    setStart: (payload: Dayjs) => {
      set({ start: payload });
    },
    setEnd: (payload: Dayjs) => {
      set({ end: payload });
    },
  }));
};

export const SummaryContext = createContext<Summarystore | null>(null);

export const useSummaryStore = <T>(selector: (store: SummaryState) => T): T => {
  const context = useContext(SummaryContext);
  if (!context) {
    throw new Error("error");
  }
  return useStore(context, selector);
};
