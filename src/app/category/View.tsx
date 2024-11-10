"use client";

import Item from "@/components/Category/ListItem";
import { Button } from "@nextui-org/react";
import { useCategoryStore } from "../../store/category";
import dynamic from "next/dynamic";

const Detail = dynamic(() => import("@/components/Category/Detail"), {
  ssr: false,
});

const View = () => {
  const { categoryList, clickAdd, clickEdit } = useCategoryStore(
    (store) => store
  );

  return (
    <>
      <Button className="mb-2" onClick={clickAdd}>
        Add Category
      </Button>
      <div>
        {categoryList?.map((item) => (
          <Item key={item.name} data={item} clickEdit={clickEdit} />
        ))}
      </div>
      <Detail />
    </>
  );
};

export default View;
