"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import { addExpense, editExpense } from "@/fetch/expense";
import { useExpenseStore } from "@/app/store/expense";
import { IconContext } from "react-icons";
import { findIcon } from "../Icon";

const Detail = () => {
  const [loading, setLoding] = useState(false);
  const { open, setOpen, categoryList, type, data, setData, getExpenses } =
    useExpenseStore((store) => store);
  const isAdd = type === "ADD";
  const { amount, category_id, description } = data;

  const clickAdd = async () => {
    setLoding(true);
    try {
      if (isAdd) {
        await addExpense(data);
      } else {
        await editExpense(data);
      }
      await getExpenses();
      setOpen(false);
    } finally {
      setLoding(false);
    }
  };

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
                Transaction
              </ModalHeader>
              <ModalBody>
                {/* <div className="flex items-center">
                  <span className="mr-2">Date</span>
                  <DatePicker
                    className="max-w-[284px]"
                    value={date}
                    showMonthAndYearPickers
                    onChange={(e) => console.log(e.toString())}
                    label={"1"}
                  />
                </div> */}
                <div className="flex items-center">
                  <Input
                    label="Amount"
                    type="number"
                    required
                    value={amount}
                    onChange={(e) =>
                      setData({ ...data, amount: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="flex items-center">
                  <Select
                    label="Category"
                    className="max-w-xs"
                    required
                    value={category_id}
                    onChange={(e) => {
                      setData({ ...data, category_id: Number(e.target.value) });
                    }}
                  >
                    {categoryList.map(({ id, name, icon }) => {
                      const Icon = findIcon(icon);
                      return (
                        <SelectItem key={id} value={id} textValue={name}>
                          <div className="flex">
                            <IconContext.Provider value={{ size: "22" }}>
                              <div className="flex items-center mr-2">
                                {Icon}
                              </div>
                            </IconContext.Provider>
                            {name}
                          </div>
                        </SelectItem>
                      );
                    })}
                  </Select>
                </div>
                <div className="flex items-center">
                  <Textarea
                    label="Note"
                    required
                    value={description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  />
                </div>

                <Button onClick={clickAdd} isLoading={loading}>
                  {type}
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Detail;
