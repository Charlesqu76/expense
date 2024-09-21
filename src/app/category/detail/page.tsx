"use client";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

const Detail = () => {
  const [newCategory, setNewCategory] = useState("");
  const [newType, setNewType] = useState("");
  const [newIcon, setNewIcon] = useState("");
  // const deleteCategory = (id: number) => {
  //   setCategories(categories.filter((category) => category.id !== id));
  // };
  const addCategory = () => {};
  return (
    <div className="mb-4 text-black">
      <input
        type="text"
        placeholder="Category name"
        className="w-full p-2 mb-2 border rounded"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category type"
        className="w-full p-2 mb-2 border rounded"
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category icon (emoji or icon name)"
        className="w-full p-2 mb-2 border rounded"
        value={newIcon}
        onChange={(e) => setNewIcon(e.target.value)}
      />
      <button
        onClick={addCategory}
        className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center justify-center"
      >
        <IoIosAddCircle className="mr-2" size={20} />
        Add Category
      </button>
    </div>
  );
};

export default Detail;
