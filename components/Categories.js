import styles from "../styles/styles.module.css";
import React from "react";
// import Category from "./Category";

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  function handleCategoryChange(category) {
    if (category.name === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category.name);
    }
  }

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div key={category.id}>
          <h4
            onClick={() => handleCategoryChange(category)}
            className={
              selectedCategory === category.name
                ? styles.categoryItem_active
                : styles.categoryItem
            }
          >
            {category.name}
          </h4>
        </div>
      ))}
    </div>
  );
}
