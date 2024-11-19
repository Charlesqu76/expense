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
    <Collapse
      items={[
        {
          key: "data",
          label: "Data",
          children: (
            <div className="space-y-2">
              {processedData.map(([key, { amount, items }]) => (
                <div key={key}>
                  <div className="flex items-center justify-between text-base font-bold mb-2 px-2">
                    <span>{key}</span>
                    <span>{amount.toFixed(2)}</span>
                  </div>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <ListItem key={item["id"]} data={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  );
};

export default Data;
