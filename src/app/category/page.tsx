"use client";

import CategoryDetail from "@/components/CategoryDetail";
import Link from "next/link";
import { useState } from "react";
interface Category {
  id: number;
  name: string;
}

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (newCategory.trim()) {
      const category: Category = {
        id: Date.now(),
        name: newCategory.trim(),
      };
      setCategories([...categories, category]);
      setNewCategory("");
    }
  };

  return (
    <main className="max-w-md mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <Link href="/" className="text-blue-500 hover:underline mb-4 block">
        Back to Expenses
      </Link>
      <div className="mb-4">
        {/* <input
          type="text"
          placeholder="New category name"
          className="w-full p-2 mb-2 border rounded"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        /> */}
        <button
          onClick={addCategory}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <Link href={"/category/detail"}>Add Category</Link>
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Existing Categories:</h2>
        {categories.length === 0 ? (
          <p>No categories yet. Add one above!</p>
        ) : (
          <ul className="list-disc pl-5">
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        )}
      </div>
      <CategoryDetail />
    </main>
  );
};

export default Page;
