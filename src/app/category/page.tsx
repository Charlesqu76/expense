import View from "./View";
import { getCategory } from "@/fetch/category";
import Provider from "./Provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "category",
};

const Page = async () => {
  const { data } = await getCategory();
  return (
    <main className="mx-auto p-2 ">
      <Provider categoryList={data || []}>
        <View />
      </Provider>
    </main>
  );
};

export default Page;
