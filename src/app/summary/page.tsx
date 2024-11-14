import { getSummary } from "@/fetch/summary";
import View from "./view";
import SummaryProvider from "./Provider";

const Summary = async () => {
  const { data } = await getSummary();
  return (
    <SummaryProvider>
      <View data={data || []} />
    </SummaryProvider>
  );
};

export default Summary;
