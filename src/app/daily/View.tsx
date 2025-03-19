"use client";

import ListItem from "@/components/transaction/ListItem";
import { useExpenseStore } from "../../store/expense";
import dynamic from "next/dynamic";
import { Button } from "antd";
import { TDaily } from "@/type/transaction";
import { unlink } from "@/fetch/daily";
import { useState } from "react";

const LinkModal = dynamic(() => import("@/components/daily/LinkModal"), {
  ssr: false,
});

interface IProps {
  data: TDaily[];
}

const DailyView = ({ data }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className="mb-4" type="primary" onClick={() => setOpen(true)}>
        Link Expense
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((v) => (
          <ListItem
            key={v.id}
            data={v}
            onDelete={async (data) => {
              const res = await unlink(data.id);
            }}
          />
        ))}
      </div>
      <LinkModal open={open} setOpen={setOpen} />
    </>
  );
};

export default DailyView;
