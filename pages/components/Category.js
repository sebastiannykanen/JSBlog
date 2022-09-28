import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";
import CategoryV2 from "./CategoryV2";

export default function Category({
  categories,
  setSelectedCategory,
  selectedCategory,
  selectedKey,
  setSelectedKey,
}) {
  return (
    <div className={styles.categories}>
      {categories.map((category, id) => (
        <CategoryV2
          category={category}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />
      ))}
    </div>
  );
}
