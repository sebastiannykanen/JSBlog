import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";

export default function Categories({ categories, setSelectedCategory }) {
  function handleCategoryChange(name) {
    setSelectedCategory(name);
  }

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div className={styles.flexItem}>
          <h2
            key={category.id}
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </h2>
        </div>
      ))}
    </div>
  );
}
