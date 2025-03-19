"use client";
import dayjs from "dayjs";
import { DAY } from "@/const";
import clsx from "clsx";
import { useState } from "react";
import { ChevronRight, Trash2 } from "lucide-react";
import { findIcon } from "../Icon";
import { TTransaction } from "@/type/transaction";

interface IProps {
  data: TTransaction & { daily?: number };
  clickEdit?: (data: TTransaction) => void;
  onDelete?: (data: TTransaction) => void;
}
const ListItem = ({ data, clickEdit, onDelete }: IProps) => {
  const [fold, setFold] = useState(true);
  const { amount, create_time, description, name, icon, daily } = data;
  const date = dayjs(create_time);
  const Icon = findIcon(icon);
  const cls = clsx({
    "w-full h-16  flex items-center justify-between rounded-lg ": true,
    "border-b-1": description,
    "cursor-pointer": !!clickEdit,
  });

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(data);
  };

  return (
    <div className="bg-gray-50 px-4 py-2 shadow-md">
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
          {daily && <span>/ {daily}</span>}
          {onDelete && (
            <button
              onClick={handleDelete}
              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
              aria-label="Delete transaction"
            >
              <Trash2 size={18} />
            </button>
          )}
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
