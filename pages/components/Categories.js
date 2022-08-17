import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";

export default function Categories({ categories, setSelectedCategory }) {
  function handleCategoryChange(name) {
    setSelectedCategory(name);
  }

  return (
    <div>
      <div>
        {categories.map((category) => (
          <h2
            key={category.id}
            className={styles.flexItem}
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </h2>
        ))}
      </div>
    </div>
  );
}
