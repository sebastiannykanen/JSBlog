import styles from "../../styles/styles.module.css";
import React, { useEffect, useMemo, useState } from "react";

export default function Categories({ title }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleCategoryChange(e) {
    e.preventDefault();
    setSelectedCategory(e.target.value);
    console.log(selectedCategory);
  }

  return (
    <div>
      <div>
        <h2 className={styles.flexItem} onClick={handleCategoryChange}>
          {title}
        </h2>
      </div>
    </div>
  );
}
