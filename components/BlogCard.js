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
    <Link href={"/" + slug} className={styles.hello}>
      <div className={styles.posts}>
        <h2>{title}</h2>
        <img src={picture.url} />
        <p dangerouslySetInnerHTML={{ __html: description.html }}></p>
        <h5>
          {new Date(`${datePublished}`).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h5>
      </div>
    </Link>
  );
}
