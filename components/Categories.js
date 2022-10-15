import styles from "../styles/styles.module.css";
import React from "react";
import Category from "./Category";

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Category
          category={category}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          key={categories.id}
        />
      ))}
    </div>
  );
}
