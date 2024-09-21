import { FaAngleRight } from "react-icons/fa6";

interface IProps {
  name: string;
  date: string;
  amount: number;
}
const ListItem = ({ name, date, amount }: IProps) => {
  return (
    <div className="flex justify-between items-center py-1 px-2  border-b-[1px] border-b-gray-100">
      <div>
        {/* <Image /> */}
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="opacity-50">{date}</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-red-600 font-bold">{amount}</div>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default ListItem;
