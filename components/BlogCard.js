import Link from "next/link";
import styles from "../styles/styles.module.css";
// import Image from "next/image";

export default function BlogCard({
  title,
  slug,
  datePublished,
  picture,
  description,
}) {
  // const myLoader = ({ src }) => {
  //   return `${picture.url}`;
  // };

  return (
    <div className={styles.posts}>
      <h2>{title}</h2>
      <h5>
        {new Date(`${datePublished}`).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h5>
      <img src={picture.url} alt="" className={styles.picture} />
      {/* <Image
        loader={myLoader}
        src={picture.url}
        alt=""
        className={styles.picture}
        width={300}
        height={400}
      /> */}
      <h5 dangerouslySetInnerHTML={{ __html: description.html }}></h5>
      <Link href={"/" + slug} className={styles.hello}>
        <button className={styles.readPostButton}>Read Post</button>
      </Link>
    </div>
  );
}
