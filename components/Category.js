import styles from "../styles/styles.module.css";
import React from "react";

export default function Category({
  category,
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
  );
}
