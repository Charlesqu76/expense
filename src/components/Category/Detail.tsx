"use client";

import { useState } from "react";
import { icons } from "../Icon";
import { addCategory, editCategory } from "@/fetch/category";
import { useCategoryStore } from "@/store/category";
import { Button, Form, Input, Modal, Select } from "antd";
const { Item } = Form;
const Detail = () => {
  const { type, data, setData, open, setOpen, queryCategory } =
    useCategoryStore((store) => store);
  const [loading, setLoding] = useState(false);

  const isAdd = type === "ADD";
  const { id, name, icon } = data;

  const onFinish = async (values: any) => {
    setLoding(true);
    try {
      if (isAdd) {
        await addCategory({ ...values });
      } else {
        await editCategory({ id, ...values });
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
      footer={null}
      title={"Category"}
      onCancel={() => setOpen(false)}
      maskClosable={false}
    >
      <Form
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={false}
        labelCol={{ span: 4 }}
        initialValues={{ name, icon }}
      >
        <Item className="" label="name" name="name">
          <Input placeholder="Input name" />
        </Item>
        <Item className="" label="icon" name="icon">
          <Select
            value={data.icon}
            onChange={(value) => {
              setData({ ...data, icon: value });
            }}
          >
            {icons.map(({ name, icon }, i) => (
              <Select.Option key={name + i} value={name}>
                {icon}
              </Select.Option>
            ))}
          </Select>
        </Item>
        <Button htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default Detail;
