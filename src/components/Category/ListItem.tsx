import { TCategory } from "@/type/category";
import { findIcon } from "../Icon";
import { IconContext } from "react-icons";
import { Button } from "@nextui-org/react";

interface IProps {
  data: TCategory;
  clickEdit: Function;
}

const Item = ({ data, clickEdit }: IProps) => {
  const { name, icon } = data;
  const Icon = findIcon(icon);
  return (
    <>
      <Button
        className="w-full h-12 mb-2 flex items-center justify-between p-4 rounded-lg bg-gray-50"
        variant="light"
        onClick={() => {
          clickEdit(data);
        }}
      >
        <div className="flex items-center">
          <IconContext.Provider value={{ size: "22" }}>
            <div>{Icon}</div>
          </IconContext.Provider>
          <div className="ml-4">{name}</div>
        </div>
      </Button>
    </>
  );
};

export default Item;
