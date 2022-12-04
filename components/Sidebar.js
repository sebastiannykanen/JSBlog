import Link from "next/link";
import styles from "../styles/styles.module.css";
import Image from "next/image";
import HeadShot from "../public/jenni.jpg";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div>
      <div className={styles.sideBar}>
        <Image
          src={HeadShot}
          alt="Header picture for blog, bulldog on picture and Jenni Strand as text"
          className={styles.headShot}
          width={300}
          height={300}
          placeholder="blur"
          quality={100}
        />
        <h5>
          Welcome to my blog. <br></br>My name is Jenni.
        </h5>
        <div className={styles.socialIcons}>
          <SocialIcon
            url="https://www.instagram.com/jenni.jpeg/"
            target="_blank"
          />
          <SocialIcon
            url="https://www.pinterest.com/jennishh/"
            target="_blank"
          />
          <SocialIcon
            network="mailto"
            onClick={() => router.push("mailto:jennistrand@hotmail.com")}
          />
        </div>
      </div>
    </div>
  );
}
