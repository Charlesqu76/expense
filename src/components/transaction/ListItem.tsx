"use client";
import dayjs from "dayjs";
import { DAY } from "@/const";
import clsx from "clsx";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { findIcon } from "../Icon";
import { TTransaction } from "@/type/transaction";

interface IProps {
  data: TTransaction;
  clickEdit?: (data: TTransaction) => void;
}
const ListItem = ({ data, clickEdit }: IProps) => {
  const [fold, setFold] = useState(true);
  const { amount, create_time, description, name, icon } = data;
  const date = dayjs(create_time);
  const Icon = findIcon(icon);
  const cls = clsx({
    "w-full h-16  flex items-center justify-between rounded-lg  cursor-pointer ":
      true,
    "border-b-1": description,
  });
  return (
    <div className="bg-gray-50 px-4 py-2">
      <div className={cls} onClick={() => clickEdit?.(data)}>
        <div className="flex">
          <div className="flex items-center mr-2">{Icon}</div>

          <div className="flex flex-col items-start">
            <span className="font-medium text-gray-900">{name}</span>
            <span className="text-sm text-gray-500">
              {DAY[date.day()]}, {date.format("YYYY-MM-DD")}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="font-bold">{amount.toFixed(2)}</div>
          {clickEdit && <ChevronRight />}
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
