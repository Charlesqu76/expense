"use client";
import { FaAngleRight } from "react-icons/fa6";
import dayjs from "dayjs";
import { TCategory } from "@/type/category";
// import { findIcon } from "../Icon";
import { IconContext } from "react-icons";
import { DAY } from "@/const";
import clsx from "clsx";
import { useState } from "react";

interface IProps {
  data: TTransaction;
  categoryMap: Record<number, TCategory>;
  clickEdit: Function;
}
const ListItem = ({ data, categoryMap, clickEdit }: IProps) => {
  const [fold, setFold] = useState(true);
  const { amount, create_time, description, category_id } = data;
  const { name, icon } = categoryMap[category_id];
  const date = dayjs(create_time);
  // const Icon = findIcon(icon);
  const cls = clsx({
    "w-full h-16  flex items-center justify-between rounded-lg  cursor-pointer ":
      true,
    "border-b-1": description,
  });
  return (
    <div className="bg-gray-50 px-4 py-2">
      <div className={cls} onClick={() => clickEdit(data)}>
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
      {description && (
        <div
          className={clsx([fold && "truncate", "mt-1 text-sm"])}
          onClick={() => setFold((prev) => !prev)}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default ListItem;
