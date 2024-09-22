"use client";

import Detail from "@/components/Category/Detail";
import Item from "@/components/Category/ListItem";
import { TCategory } from "@/type/category";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  list: TCategory[];
}

const View = ({ list }: Props) => {
  const [categories, setCategories] = useState<TCategory[]>(list || []);
  const [open, setOpen] = useState(false);

  return (
    <main className="max-w-md mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <Link href="/" className="text-blue-500 hover:underline mb-4 block">
        Back to Expenses
      </Link>
      <div className="mb-4">
        <Button className="" onClick={() => setOpen(true)}>
          Add Category
        </Button>
      </div>
      <div>
        {categories.map((item) => (
          <Item key={item.name} data={item} setCategories={setCategories} />
        ))}
      </div>
      {open && (
        <Detail
          open={open}
          setOpen={setOpen}
          setCategories={setCategories}
          type="ADD"
          data={{
            id: 0,
            name: "",
            icon: "",
          }}
        />
      )}
    </main>
  );
};

export default View;
