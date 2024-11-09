"use client";

import Detail from "@/components/Category/Detail";
import Item from "@/components/Category/ListItem";
import { Button } from "@nextui-org/react";
import { useCategoryStore } from "../store/category";

const View = () => {
  const { categoryList, clickAdd, clickEdit } = useCategoryStore(
    (store) => store
  );

  return (
    <>
      <div className="mb-4">
        <Button className="mb-2" onClick={clickAdd}>
          Add Category
        </Button>
      </div>
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
