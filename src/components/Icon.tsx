import { ReactElement } from "react";
import {
  Backpack,
  Clapperboard,
  Coffee,
  Cookie,
  Droplet,
  Dumbbell,
  Fuel,
  Gift,
  Hospital,
  Hotel,
  House,
  MonitorSmartphone,
  Phone,
  School,
  Shirt,
  ShoppingBasket,
  ShoppingCart,
  TrainFront,
  Utensils,
  Wifi,
  Youtube,
  Zap,
} from "lucide-react";

export const icons = [
  { name: "Phone", icon: <Phone /> },
  { name: "Video", icon: <Youtube /> },
  { name: "Electric", icon: <Zap /> },
  { name: "Gas", icon: <Fuel /> },
  { name: "Water", icon: <Droplet /> },
  { name: "Wifi", icon: <Wifi /> },
  { name: "Train", icon: <TrainFront /> },
  { name: "Shopping", icon: <ShoppingCart /> },
  { name: "Food", icon: <Cookie /> },
  { name: "Dining", icon: <Utensils /> },
  { name: "Coffee/Drinks", icon: <Coffee /> },
  { name: "Utilities", icon: <ShoppingBasket /> },
  { name: "Clothing", icon: <Shirt /> },
  { name: "Electronics", icon: <MonitorSmartphone /> },
  { name: "Healthcare", icon: <Hospital /> },
  { name: "Entertainment", icon: <Clapperboard /> },
  { name: "Travel", icon: <Backpack /> },
  { name: "Accommodation", icon: <Hotel /> },
  { name: "Education", icon: <School /> },
  { name: "Housing", icon: <House /> },
  { name: "Gifts", icon: <Gift /> },
  { name: "Fitness", icon: <Dumbbell /> },
];

export const findIcon = (name: string): ReactElement | null => {
  const icon = icons.find((item) => item["name"] === name)?.icon || null;
  return icon;
};
