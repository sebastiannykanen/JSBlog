import Link from "next/link";
import styles from "../styles/styles.module.css";
import Image from "next/image";
import HeadShot from "../public/3119.webp";

export default function Sidebar() {
  return (
    <div>
      <div className={styles.sideBar}>
        <Image
          src={HeadShot}
          alt="Header picture for blog, bulldog on picture and Jenni Strand as text"
          className={styles.headShot}
          width={200}
          height={200}
          placeholder="blur"
          quality={100}
        />
        <h4>My name is Jenni Strand</h4>
      </div>
    </div>
  );
}
