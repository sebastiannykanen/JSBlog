import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";

export default function Category({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  const [toggled, setToggled] = useState();

  function handleCategoryChange(name, categories) {
    setSelectedCategory(name);
  }

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div
          className={styles.flexItem}
          key={category.id}
          onClick={() => setToggled(!toggled)}
        >
          <h4 test="yes" onClick={() => handleCategoryChange(category.name)}>
            {category.name}
          </h4>
        </div>
      ))}
    </div>
  );
}
