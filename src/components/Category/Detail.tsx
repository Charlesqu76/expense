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
import { findIcon, icons } from "../Icon";
import IconModal from "../Icon";
import { FaAngleRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { addCategory, editCategory, getCategory } from "@/fetch/category";
import { TCategory } from "@/type/category";

interface IProps {
  open: boolean;
  setOpen: Function;
  setCategories: Function;
  type: "ADD" | "EDIT";
  data: TCategory;
}

const Detail = ({ open, setOpen, setCategories, type, data }: IProps) => {
  const isAdd = type === "ADD";
  const [iconOpen, setIconOPen] = useState(false);
  const [name, setName] = useState(isAdd ? "" : data["name"]);
  const [icon, setIcon] = useState(isAdd ? icons[0]["name"] : data["icon"]);
  const [loading, setLoding] = useState(false);

  const clickIcon = (name: string) => {
    setIconOPen(false);
    setIcon(name);
  };
  const clickAdd = async () => {
    setLoding(true);
    try {
      if (isAdd) {
        await addCategory({ name, icon });
      } else {
        await editCategory({ id: data["id"], name, icon });
      }
      const newData = await getCategory();
      setCategories(newData);
      setOpen(false);
    } finally {
      setLoding(false);
    }
  };

  const Icon = findIcon(icon);
  return (
    <>
      <Modal isOpen={open} placement={"center"} onClose={() => setOpen(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Category
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center">
                  <span className="mr-2">Name</span>
                  <Input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
