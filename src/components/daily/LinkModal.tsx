"use client";
import { getExpense } from "@/fetch/expense";
import { Button, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import ListItem from "../transaction/ListItem";
import { link } from "@/fetch/daily";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function LinkMordal({ open, setOpen }: IProps) {
  const [data, setData] = useState([] as any[]);
  const [No, setNo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getExpense();
      setData(data.data || []);
    };
    fetchData();
  }, []);

  const linkExpense = async (id: number | null) => {
    if (id === null || id === undefined) {
      return;
    }
    const res = await link(id);
  };
  return (
    <Modal
      open={open}
      footer={null}
      width={600}
      onCancel={() => setOpen(false)}
      maskClosable={false}
      onClose={() => setOpen(false)}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold">Link</h1>
        <p>Link your expense to this daily transaction.</p>
        <Select
          value={No}
          onChange={(value) => {
            setNo(value);
          }}
          showSearch
          className="w-full"
          optionFilterProp="description"
          filterSort={(optionA, optionB) =>
            optionA.description.localeCompare(optionB.description)
          }
          options={data.map(({ id, ...others }) => {
            return {
              value: id,
              ...others,
            };
          })}
          optionRender={({ data }) => {
            return (
              <div className="flex flex-col">
                <ListItem data={data} />
              </div>
            );
          }}
        ></Select>
        <Button className="mt-4" type="primary" onClick={() => linkExpense(No)}>
          Link
        </Button>
      </div>
    </Modal>
  );
}
