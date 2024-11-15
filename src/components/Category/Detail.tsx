"use client";

import { useState } from "react";
import { icons } from "../Icon";
import { addCategory, editCategory } from "@/fetch/category";
import { useCategoryStore } from "@/store/category";
import { Button, Input, Modal, Select, Form } from "antd";
const { Item } = Form;

const Detail = () => {
  const { type, data, setData, open, setOpen, queryCategory } =
    useCategoryStore((store) => store);
  const [loading, setLoding] = useState(false);

  const isAdd = type === "ADD";
  const { name, icon } = data;

  const clickAdd = async () => {
    setLoding(true);
    try {
      if (isAdd) {
        // @ts-ignore
        await addCategory(data);
      } else {
        // @ts-ignore
        await editCategory(data);
      }
      await queryCategory();
      setOpen(false);
    } finally {
      setLoding(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title={"Category"}
      maskClosable={false}
      footer={() => (
        <Button
          onClick={clickAdd}
          loading={loading}
          type="primary"
          htmlType="submit"
        >
          {type}
        </Button>
      )}
    >
      <Form onFinish={clickAdd} autoComplete="off" requiredMark={false}>
        <Item className="" required label="name">
          <Input
            className="w-full"
            placeholder="Input name"
            required
            value={name}
            size="large"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Item>
        <Item className="" label="icon">
          <Select
            defaultValue={icon}
            className="w-full"
            size="large"
            options={icons.map(({ name, icon }) => ({
              label: icon,
              value: name,
            }))}
          />
        </Item>
      </Form>
    </Modal>
  );
};

export default Detail;
