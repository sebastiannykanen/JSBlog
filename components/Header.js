import React from "react";
import Image from "next/image";
import HeaderPic from "../public/JSHeader5.png";
import styles from "../styles/styles.module.css";

export default function Header({}) {
  return (
    <div className={styles.headerPic}>
      <Image
        src={HeaderPic}
        alt="Header picture for blog, bulldog on picture and Jenni Strand as text"
        width={700}
        height={200}
        placeholder="blur"
        quality={100}
      />
    </div>
  );
}
