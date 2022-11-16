import Link from "next/link";
import styles from "../styles/styles.module.css";

export default function BlogCard({
  title,
  slug,
  datePublished,
  picture,
  description,
}) {
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
      <img src={picture.url} className={styles.picture} />
      <h5 dangerouslySetInnerHTML={{ __html: description.html }}></h5>
      <Link href={"/" + slug} className={styles.hello}>
        <button className={styles.readPostButton}>Read Post</button>
      </Link>
    </div>
  );
}
