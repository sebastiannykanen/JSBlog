import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";
import Category from "./Category";

export default function Categories({
  categories,
  setSelectedCategory,
  toggled,
  setToggled,
  selectedCategory,
  selectedKey,
  setSelectedKey,
}) {
  return (
    <Category
      categories={categories}
      setSelectedCategory={setSelectedCategory}
      setToggled={setToggled}
      selectedCategory={selectedCategory}
      selectedKey={selectedKey}
      setSelectedKey={setSelectedKey}
    />
  );
}
