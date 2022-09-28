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
  const [active, setActive] = useState(true);

  console.log(active);

  function handleCategoryChange(category) {
    setSelectedCategory(category.name);
    setActive(!active);
  }
  return (
    <div key={category.id}>
      <h4
        onClick={() => handleCategoryChange(category)}
        className={`${styles.flexItem} ${
          active ? styles.flexItem_active : ""
        } `}
      >
        {category.name}
      </h4>
    </div>
  );
}
