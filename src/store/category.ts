import { useStore } from "zustand";
import { createContext, useContext } from "react";
import { createStore } from "zustand/vanilla";
import { TCategory } from "@/type/category";
import { Status } from "@/type";
import { getCategory } from "@/fetch/category";
import { icons } from "@/components/Icon";

interface CategoryProps {
  open: boolean;
  categoryList: TCategory[];
  data: Partial<TCategory>;
  type: Status;
}

interface CategoryState extends CategoryProps {
  setOpen: (payload: boolean) => void;
  setData: (payload: Partial<TCategory>) => void;
  clickAdd: () => void;
  clickEdit: (payload: TCategory) => void;
  queryCategory: () => void;
}

export type CategoryStore = ReturnType<typeof createCategoryStore>;

export const createCategoryStore = (initProps?: Partial<CategoryProps>) => {
  const DEFAULT_PROPS: CategoryProps = {
    open: false,
    categoryList: [],
    data: {},
    type: "ADD",
  };
  return createStore<CategoryState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setOpen: (payload: boolean) => {
      set({ open: payload });
    },
    setData: (payload: Partial<TCategory>) => {
      set({ data: payload });
    },
    clickAdd: () => {
      set({
        open: true,
        type: "ADD",
        data: {
          name: "",
          icon: icons[0].name,
        },
      });
    },
    clickEdit: (payload: TCategory) => {
      set({
        open: true,
        type: "EDIT",
        data: payload,
      });
    },
    queryCategory: async () => {
      const { data } = await getCategory();
      set({ categoryList: data || [] });
    },
  }));
};

export const CategoryContext = createContext<CategoryStore | null>(null);

export const useCategoryStore = <T>(
  selector: (store: CategoryState) => T
): T => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("error");
  }
  return useStore(context, selector);
};
