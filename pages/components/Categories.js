import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";
import Category from "./Category";

export default function Categories({
  categories,
  setSelectedCategory,
  toggled,
  setToggled,
  selectedCategory,
}) {
  return (
    <Category
      categories={categories}
      setSelectedCategory={setSelectedCategory}
      setToggled={setToggled}
      selectedCategory={selectedCategory}
    />
  );
}
