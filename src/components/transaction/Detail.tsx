"use client";
import { useState } from "react";
import { addExpense, editExpense } from "@/fetch/expense";
import { useExpenseStore } from "@/store/expense";
import { Button, Input, Modal, Select, Form, DatePicker } from "antd";
import { findIcon } from "../Icon";
import dayjs from "dayjs";
const Textarea = Input.TextArea;
const { Item } = Form;

const Detail = () => {
  const [loading, setLoding] = useState(false);
  const { open, setOpen, categoryList, type, data, getExpenses } =
    useExpenseStore((store) => store);
  const isAdd = type === "ADD";
  const { amount, category_id, description } = data;

  const onFinish = async (values: any) => {
    const { date, ...others } = values;
    const create_time = date.toString();
    setLoding(true);
    try {
      if (isAdd) {
        await addExpense(others);
      } else {
        await editExpense({ create_time, ...others });
      }
      await getExpenses();
      setOpen(false);
    } finally {
      setLoding(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title="Expense"
      footer={null}
      destroyOnClose
    >
      <Form
        autoComplete="off"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        labelAlign="right"
        onFinish={onFinish}
        initialValues={{ date: dayjs(), amount, category_id, description }}
      >
        <Item label="amount" name="amount">
          <Input type="number" />
        </Item>
        <Item label="category" name="category_id">
          <Select
            options={categoryList.map(({ id, name, icon }) => ({
              label: name,
              value: id,
              icon: icon,
            }))}
            optionRender={({ data }) => (
              <div className="flex items-center space-x-2">
                {findIcon(data.icon)} <span>{data.label}</span>
              </div>
            )}
          />
        </Item>
        <Item label="date" name={"date"}>
          <DatePicker />
        </Item>
        <Item label="description" name="description">
          <Textarea placeholder="description" rows={3} />
        </Item>
        <Item className="text-end">
          <Button loading={loading} type="primary" htmlType="submit">
            {type}
          </Button>
        </Item>
      </Form>
    </Modal>
  );
};

export default Detail;
