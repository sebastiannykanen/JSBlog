import Link from "next/link";
import styles from "../styles/styles.module.css";

export default function BlogCard({
  title,
  author,
  slug,
  content,
  datePublished,
}) {
  return (
    <div>
      <Link href={"/" + slug}>
        <div className={styles.posts}>
          <h2>{title}</h2>
          {/* <div
            className={styles.wallOfText}
            dangerouslySetInnerHTML={{ __html: content.html }}
          ></div> */}
          {/* <h5>{datePublished}</h5> */}
          <h5>
            {new Date(`${datePublished}`).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h5>
        </div>
      </Link>
    </div>
  );
}
