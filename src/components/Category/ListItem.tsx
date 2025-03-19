import { TCategory } from "@/type/category";
import { findIcon } from "../Icon";
interface IProps {
  data: TCategory;
  clickEdit: Function;
}

const Item = ({ data, clickEdit }: IProps) => {
  const { name, icon } = data;
  const Icon = findIcon(icon);
  return (
    <div
      className="mb-2 flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-50 shadow-md cursor-pointer"
      onClick={() => {
        clickEdit(data);
      }}
    >
      {Icon}
      <span className="font-bold">{name}</span>
    </div>
  );
};

export default Item;
