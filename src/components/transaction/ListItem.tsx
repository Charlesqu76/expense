import { FaAngleRight } from "react-icons/fa6";
import dayjs from "dayjs";
import { TCategory } from "@/type/category";
// import { findIcon } from "../Icon";
import { IconContext } from "react-icons";
import { DAY } from "@/const";

interface IProps {
  data: TTransaction;
  categoryMap: Record<number, TCategory>;
  clickEdit: Function;
}
const ListItem = ({ data, categoryMap, clickEdit }: IProps) => {
  const { amount, create_time, description, category_id } = data;
  const { name, icon } = categoryMap[category_id];
  const date = dayjs(create_time);
  // const Icon = findIcon(icon);
  return (
    <div
      className="w-full h-16  p-4 flex items-center justify-between rounded-lg bg-gray-50 cursor-pointer"
      onClick={() => clickEdit(data)}
    >
      <div className="flex">
        {/* <IconContext.Provider value={{ size: "22" }}>
          <div className="flex items-center mr-2">{Icon}</div>
        </IconContext.Provider> */}

        <div className="flex flex-col items-start">
          <span className="font-medium text-gray-900">{name}</span>
          <span className="text-sm text-gray-500">
            {DAY[date.day()]}, {date.format("YYYY-MM-DD")}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="font-bold">{amount.toFixed(2)}</div>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default ListItem;
