import { FaPhoneVolume } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { MdWaterDamage } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import {
  GiKnifeFork,
  GiShoppingCart,
  GiHamburger,
  GiCoffeeCup,
  GiFruitBowl,
  GiGasStove,
  GiClothes,
  GiSmartphone,
  GiMedicines,
} from "react-icons/gi";
import {
  MdMovie,
  MdFlight,
  MdHotel,
  MdSchool,
  MdDirectionsBus,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { ReactElement } from "react";

export const icons = [
  { name: "Phone", icon: <FaPhoneVolume /> },
  { name: "Video", icon: <FaYoutube /> },
  { name: "Electric", icon: <MdElectricBolt /> },
  { name: "Gas", icon: <FaGasPump /> },
  { name: "Water", icon: <MdWaterDamage /> },
  { name: "Wifi", icon: <FaWifi /> },
  { name: "Gift", icon: <FaGift /> },
  { name: "Train", icon: <FaTrainSubway /> },
  { name: "Shopping", icon: <FaCartShopping /> },
  { name: "Food", icon: <IoFastFood /> },
  { name: "Dining", icon: <GiKnifeFork /> },
  { name: "Groceries", icon: <GiShoppingCart /> },
  { name: "Fast Food", icon: <GiHamburger /> },
  { name: "Coffee/Drinks", icon: <GiCoffeeCup /> },
  { name: "Home Cooking", icon: <GiFruitBowl /> },
  { name: "Utilities", icon: <GiGasStove /> },
  { name: "Clothing", icon: <GiClothes /> },
  { name: "Electronics", icon: <GiSmartphone /> },
  { name: "Healthcare", icon: <GiMedicines /> },
  { name: "Entertainment", icon: <MdMovie /> },
  { name: "Travel", icon: <MdFlight /> },
  { name: "Accommodation", icon: <MdHotel /> },
  { name: "Education", icon: <MdSchool /> },
  { name: "Public Transit", icon: <MdDirectionsBus /> },
  { name: "Housing", icon: <FaHome /> },
  { name: "Gifts", icon: <FaGift /> },
  { name: "Fitness", icon: <BiDumbbell /> },
];

export const findIcon = (name: string): ReactElement | null => {
  return icons.find((item) => item["name"] === name)?.icon || null;
};

interface IProps {
  open: boolean;
  setOpen: Function;
  onClick: (name: string) => void;
}

const IconModal = ({ open, setOpen, onClick }: IProps) => {
  return (
    <Modal
      isOpen={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <ModalContent>
        <ModalHeader>Icons</ModalHeader>
        <ModalBody>
          <div className="flex flex-wrap">
            <IconContext.Provider value={{ size: "28" }}>
              {icons.map(({ name, icon }) => {
                return (
                  <Button
                    className="p-2 mr-3 mb-2"
                    key={name}
                    size="sm"
                    onClick={() => onClick(name)}
                  >
                    {icon}
                  </Button>
                );
              })}
            </IconContext.Provider>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default IconModal;
