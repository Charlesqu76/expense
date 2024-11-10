"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { findIcon } from "../Icon";
import IconModal from "../Icon";
import { FaAngleRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { addCategory, editCategory } from "@/fetch/category";
import { useCategoryStore } from "@/store/category";

const Detail = () => {
  const { type, data, setData, open, setOpen, queryCategory } =
    useCategoryStore((store) => store);
  const [loading, setLoding] = useState(false);
  const [iconOpen, setIconOPen] = useState(false);

  const isAdd = type === "ADD";
  const { name, icon } = data;

  const clickIcon = (name: string) => {
    setIconOPen(false);
    setData({ ...data, icon: name });
  };
  const clickAdd = async () => {
    setLoding(true);
    try {
      if (isAdd) {
        await addCategory(data);
      } else {
        await editCategory(data);
      }
      await queryCategory();
      setOpen(false);
    } finally {
      setLoding(false);
    }
  };

  const Icon = findIcon(icon);
  return (
    <>
      <Modal
        isOpen={open}
        placement={"center"}
        onClose={() => setOpen(false)}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Category
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center">
                  <Input
                    label="Name"
                    required
                    value={name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div className="flex items-center">
                  <span className="mr-6">Icon</span>
                  <div className="flex-1">
                    <IconContext.Provider value={{ size: "22" }}>
                      {Icon}
                    </IconContext.Provider>
                  </div>

                  <Button onClick={() => setIconOPen(true)} size="sm">
                    <FaAngleRight size={18} />
                  </Button>
                </div>
                <Button onClick={clickAdd} isLoading={loading}>
                  {type}
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <IconModal open={iconOpen} setOpen={setIconOPen} onClick={clickIcon} />
    </>
  );
};

export default Detail;
