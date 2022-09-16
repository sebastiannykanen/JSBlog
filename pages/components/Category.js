import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";

export default function Category({
  categories,
  setSelectedCategory,
  selectedCategory,
  selectedKey,
  setSelectedKey,
}) {
  const [toggled, setToggled] = useState("yes");

  useEffect(() => {
    toggled;
  }, [selectedCategory]);

  function handleCategoryChange(category) {
    setSelectedCategory(category.name);
    setSelectedKey(category.id);
  }

  return (
    <div className={styles.categories}>
      {categories.map((category, id) => (
        <div
          className={styles.flexItem}
          key={category.id}
          onClick={() => {
            if (selectedCategory === "Dogs") {
              setToggled("yes");
            } else {
              setToggled("no");
            }
          }}
        >
          <h4 test={toggled} onClick={() => handleCategoryChange(category)}>
            {category.name}
          </h4>
        </div>
      ))}
    </div>
  );
}
