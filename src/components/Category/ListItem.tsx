import { TCategory } from "@/type/category";
import { motion } from "motion/react";
import { findIcon } from "../Icon";
interface IProps {
  data: TCategory;
  clickEdit: Function;
}

const Item = ({ data, clickEdit }: IProps) => {
  const { name, icon } = data;
  const Icon = findIcon(icon);
  return (
    <motion.div
      className="w-full h-12 mb-2 flex items-center justify-between p-4 rounded-lg bg-gray-50"
      onClick={() => {
        clickEdit(data);
      }}
    >
      <div className="flex items-center">
        <div>{Icon}</div>
        <div className="ml-4">{name}</div>
      </div>
    </motion.div>
  );
};

export default Item;
