import { TCategory } from "@/type/category";
import { findIcon } from "../Icon";
import { IconContext } from "react-icons";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Detail from "./Detail";

interface IProps {
  data: TCategory;
  setCategories: Function;
}

const Item = ({ setCategories, data }: IProps) => {
  const { name, icon } = data;
  const Icon = findIcon(icon);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="block w-full mb-1"
        variant="light"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="flex items-center">
          <IconContext.Provider value={{ size: "22" }}>
            <div>{Icon}</div>
          </IconContext.Provider>
          <div className="ml-4">{name}</div>
        </div>
      </Button>
      {open && (
        <Detail
          open={open}
          setOpen={setOpen}
          setCategories={setCategories}
          type="EDIT"
          data={data}
        />
      )}
    </>
  );
};

export default Item;
