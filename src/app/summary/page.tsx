import { getSummary } from "@/fetch/summary";
import View from "./view";

const Summary = async () => {
  const { data } = await getSummary();
  return <View data={data || []} />;
};

export default Summary;
