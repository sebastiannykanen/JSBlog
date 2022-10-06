import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";

export default function CategoryV2({
  categories,
  category,
  setSelectedCategory,
  selectedCategory,
  selectedKey,
  setSelectedKey,
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
            ? styles.flexItem_active
            : styles.flexItem
        }
      >
        {category.name}
      </h4>
    </div>
  );
}
