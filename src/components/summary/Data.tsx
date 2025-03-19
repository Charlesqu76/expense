import { Collapse } from "antd";
import ListItem from "../transaction/ListItem";
import { TTransaction } from "@/type/transaction";
import { getDataByCategory } from "@/util/analysis";

interface IProps {
  data: TTransaction[];
}

const Data = ({ data }: IProps) => {
  const processedData = Object.entries(getDataByCategory(data));
  return (
    <div className="p-2 shadow-lg rounded-md bg-white">
      {processedData.map(([key, { amount, items }]) => (
        <div key={key}>
          <div className="flex items-center justify-between text-base font-bold mb-4 py-2 border-b">
            <span>{key}</span>
            <span>{amount.toFixed(2)}</span>
          </div>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ListItem key={item["id"]} data={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
