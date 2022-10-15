import React from "react";
import Image from "next/image";
import HeaderPic from "../public/JSHeader3.png";

export default function Header({}) {
  return (
    <div>
      <Image
        src={HeaderPic}
        alt="Picture of the author"
        width={1920}
        height={550}
        placeholder="blur"
        quality={50}
      />
    </div>
  );
}
