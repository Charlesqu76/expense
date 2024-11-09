import Link from "next/link";
import View from "./View";
import { getCategory } from "@/fetch/category";
import Provider from "./Provider";

const Page = async () => {
  const { data = [] } = await getCategory();
  return (
    <main className="max-w-md mx-auto p-4 ">
      <Provider categoryList={data}>
        <View />
      </Provider>
    </main>
  );
};

export default Page;
