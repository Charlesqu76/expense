import { myfetch } from "@/util/fetch";

export const getCategory = async () => {
  return await myfetch({ path: "category" });
};

export const addCategory = async ({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) => {
  return await myfetch({
    path: "category",
    method: "POST",
    data: {
      name,
      icon,
    },
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
  return await myfetch({
    path: "category/edit",
    method: "POST",
    data: {
      id,
      name,
      icon,
    },
  });
};
