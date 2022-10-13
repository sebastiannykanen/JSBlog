import React from "react";
import Category from "./Category";

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
  selectedKey,
  setSelectedKey,
}) {
  return (
    <Category
      categories={categories}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
      selectedKey={selectedKey}
      setSelectedKey={setSelectedKey}
    />
  );
}
