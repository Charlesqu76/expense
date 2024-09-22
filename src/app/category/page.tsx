import View from "./View";
import { getCategory } from "@/fetch/category";

const Page = async () => {
  const data = await getCategory();
  return (
    <main className="max-w-md mx-auto p-4 ">
      <View list={data} />
    </main>
  );
};

export default Page;
