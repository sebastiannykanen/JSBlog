import styles from "../../styles/styles.module.css";
import React from "react";
import Image from "next/image";

export default function Header({}) {
  return (
    <div>
      <Image
        src={"/JSHeader2.png"}
        alt="Picture of the author"
        width={1920}
        height={855}
      />
    </div>
  );
}
