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
  const { id, name, icon } = data;

  const onFinish = async (values: any) => {
    setLoding(true);
    try {
      if (isAdd) {
        // @ts-ignore
        await addCategory({ ...values });
      } else {
        // @ts-ignore
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
      onCancel={() => setOpen(false)}
      title={"Category"}
      maskClosable={false}
      footer={null}
      destroyOnClose
    >
      <Form
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={false}
        labelCol={{ span: 4 }}
        initialValues={{ name, icon }}
      >
        <Item className="" label="name" name="name">
          <Input placeholder="Input name" size="large" />
        </Item>
        <Item className="" label="icon" name="icon">
          <Select
            size="large"
            options={icons.map(({ name, icon }) => ({
              label: icon,
              value: name,
            }))}
          />
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
