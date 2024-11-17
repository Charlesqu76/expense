import { useStore } from "zustand";
import { createContext, useContext } from "react";
import { createStore } from "zustand/vanilla";
import { EDimensionality } from "@/type/summary";
import dayjs, { Dayjs } from "dayjs";
import { getSummary } from "@/fetch/summary";
import { TTransaction } from "@/type/transaction";

interface SummaryProps {
  data: TTransaction[];
  dimensionality: EDimensionality;
  start: Dayjs;
  end: Dayjs;
}

interface SummaryState extends SummaryProps {
  setDimensionlity: (payload: EDimensionality) => void;
  setStart: (payload: Dayjs) => void;
  setEnd: (payload: Dayjs) => void;
  setData: (payload: TTransaction[]) => void;
  queryData: () => void;
}

export type Summarystore = ReturnType<typeof createSummaryStore>;

export const createSummaryStore = (initProps?: Partial<SummaryProps>) => {
  const DEFAULT_PROPS: SummaryProps = {
    data: [],
    start: dayjs().startOf("month"),
    end: dayjs().endOf(EDimensionality.DAILY),
    dimensionality: EDimensionality.DAILY,
  };
  return createStore<SummaryState>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setDimensionlity: (payload: EDimensionality) => {
      const { start, end } = get();
      set({
        dimensionality: payload,
        start: start.startOf(payload),
        end: end.endOf(payload),
      });
    },
    setStart: (payload: Dayjs) => {
      const { dimensionality } = get();
      set({ start: payload.startOf(dimensionality) });
    },
    setEnd: (payload: Dayjs) => {
      const { dimensionality } = get();
      set({ end: payload.endOf(dimensionality) });
    },
    setData: (payload: TTransaction[]) => {
      set({ data: payload });
    },
    queryData: async () => {
      const { start, end, setData } = get();
      const { data } = await getSummary({
        start: start.toISOString(),
        end: end.toISOString(),
      });
      setData(data || []);
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
