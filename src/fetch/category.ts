import { TCategory } from "@/type/category";
import { myFetch } from "@/util/fetch";

export const getCategory = async () => {
  return myFetch.get<TCategory[]>("category");
};

export const addCategory = async ({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) => {
  return myFetch.post("category", {
    name,
    icon,
  });
};

export const editCategory = async ({
  name,
  icon,
  id,
}: {
  name: string;
  icon: string;
  id: number;
}) => {
  return myFetch.put("category", {
    name,
    icon,
    id,
  });
};
